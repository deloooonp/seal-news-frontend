import { categories } from "@/constants/categories";
import { NewsItem } from "@/types/news";

function transformNews(rawItem: any, category: string): NewsItem {
  return {
    title: rawItem.title,
    link: rawItem.link,
    contentSnippet: rawItem.contentSnippet,
    isoDate: rawItem.isoDate,
    image: rawItem.image?.large || rawItem.image?.small || rawItem.image,
    category: category,
  };
}

export async function getCNNNews(category: string = ""): Promise<NewsItem[]> {
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

export async function getHomeData() {
  const allCategoriesNews = await Promise.all(
    categories.map((cat) => getCNNNews(cat)),
  );

  const popularNews = allCategoriesNews.map((news) => news[0]).filter(Boolean);
  const headlineNews = allCategoriesNews[0];
  const recommendedNews = allCategoriesNews
    .flat()
    .sort(() => Math.random() - 0.5)
    .slice(0, 80);

  return {
    headlineNews,
    popularNews,
    recommendedNews,
  };
}
