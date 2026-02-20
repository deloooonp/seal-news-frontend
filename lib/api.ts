import { NewsItem } from "@/types/news";

export function transformNews(rawItem: any): NewsItem {
  return {
    title: rawItem.title,
    link: rawItem.link,
    contentSnippet: rawItem.contentSnippet,
    isoDate: rawItem.isoDate,
    image: rawItem.image?.large || rawItem.image?.small || rawItem.image,
    description: rawItem.description,
  };
}

export async function getCNNNews(
  category: string = "nasional",
): Promise<NewsItem[]> {
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

    return data.data.map((item: any) => transformNews(item));
  } catch (error) {
    console.error("Error fetching CNN news:", error);
    return [];
  }
}
