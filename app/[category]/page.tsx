import NewsContainer from "@/components/news/NewsContainer";
import { getCNNNews } from "@/lib/api";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  const news = (await getCNNNews(category)).slice(0, 80);

  const headerTitle =
    category === "terbaru" ? "Terbaru" : news[0].categoryLabel;
  return (
    <main>
      <NewsContainer header={headerTitle} news={news} />
    </main>
  );
}
