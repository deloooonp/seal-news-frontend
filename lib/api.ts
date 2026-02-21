import { categories } from "@/constants/categories";
import { NewsItem } from "@/types/news";
import { getNewsHref } from "./utils";

function transformNews(rawItem: any, category: string): NewsItem {
  return {
    title: rawItem.title,
    link: rawItem.link,
    contentSnippet: rawItem.contentSnippet,
    isoDate: rawItem.isoDate,
    image: rawItem.image?.large || rawItem.image?.small || rawItem.image,
    category: category,
    href: getNewsHref(category, rawItem.title),
    categoryLabel: category
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
  };
}

async function getCNNNews(category: string = ""): Promise<NewsItem[]> {
  try {
    const res = await fetch(
      `https://berita-indo-api-next.vercel.app/api/cnn-news/${category}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch CNN news");
    }

    const data = await res.json();

    return data.data.map((item: any) => transformNews(item, category));
  } catch (error) {
    console.error("Error fetching CNN news:", error);
    return [];
  }
}

export async function fetchAllNews() {
  return await Promise.all(categories.map((cat) => getCNNNews(cat)));
}

export async function getHomeData() {
  const allNews = await fetchAllNews();

  return {
    headlineNews: allNews[0],
    popularNews: allNews.map((news) => news[0]).filter(Boolean),
    recommendedNews: allNews
      .flat()
      .sort(() => Math.random() - 0.5)
      .slice(0, 80),
  };
}

export async function getDetailData(category: string) {
  const allNews = await fetchAllNews();
  const categoryIndex = categories.indexOf(category);

  return {
    popularNews: allNews.map((news) => news[0]).filter(Boolean),
    relatedNews: allNews[categoryIndex] || [],
  };
}
