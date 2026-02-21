import PopularNews from "@/components/news/PopularNews";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getHomeData } from "@/lib/api";
import { Comments, NewsDetail } from "./components";

export default async function DetailNewsPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = await params;

  const { popularNews } = await getHomeData();

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main>
      <Breadcrumbs categoryName={categoryName} />

      <div className="flex justify-between gap-10">
        <div className="flex flex-col">
          <NewsDetail categoryName={categoryName} />
          <Comments />
        </div>
        <PopularNews news={popularNews} variant="sidebar" />
      </div>
    </main>
  );
}
