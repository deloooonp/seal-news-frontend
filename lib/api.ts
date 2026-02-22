import { categories } from "@/constants/categories";
import { NewsItem } from "@/types/news";
import { getNewsHref } from "./utils";

function transformNews(rawItem: any, category: string): NewsItem {
  const categoryMatch = rawItem.link?.match(/cnnindonesia\.com\/([^/]+)\//);
  const originalCategory = categoryMatch ? categoryMatch[1] : category;

  const displayCategory = originalCategory
    .split("-")
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: rawItem.title,
    link: rawItem.link,
    contentSnippet: rawItem.contentSnippet,
    isoDate: rawItem.isoDate,
    image: rawItem.image?.large || rawItem.image?.small || rawItem.image,
    category: originalCategory,
    href: getNewsHref(originalCategory, rawItem.title),
    categoryLabel: displayCategory,
  };
}

export async function getCNNNews(category: string = ""): Promise<NewsItem[]> {
  try {
    const endpoint = category === "terbaru" ? "" : category;
    const res = await fetch(
      `https://berita-indo-api-next.vercel.app/api/cnn-news/${endpoint}`,
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

export async function getHomeData() {
  const [terbaruNews, ...allCategoriesRaw] = await Promise.all([
    getCNNNews("terbaru"),
    ...categories.map((cat) => getCNNNews(cat)),
  ]);

  return {
    headlineNews: terbaruNews.slice(0, 5),
    popularNews: allCategoriesRaw.map((news) => news[0]).filter(Boolean),
    recommendedNews: terbaruNews.slice(0, 80),
  };
}

export async function getDetailData(category: string, slug: string) {
  const isTerbaru = category === "terbaru";

  const [targetCategoryNews, terbaruNews] = await Promise.all([
    getCNNNews(isTerbaru ? "terbaru" : category),
    getCNNNews("terbaru"),
  ]);

  let relatedNews = targetCategoryNews;

  if (isTerbaru || targetCategoryNews.length === 0) {
    relatedNews = terbaruNews;
  }

  return {
    popularNews: terbaruNews.slice(0, 5),
    relatedNews: relatedNews,
  };
}
