import NewsContainer from "@/components/news/NewsContainer";
import { getCNNNews } from "@/lib/api";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  const news = await getCNNNews(category);

  return (
    <main>
      <NewsContainer header={news[0].categoryLabel} news={news} />
    </main>
  );
}
