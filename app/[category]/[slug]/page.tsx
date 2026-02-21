import { Comments, NewsDetail, RelatedNews } from "./components";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PopularNews from "@/components/news/PopularNews";
import { getHomeData } from "@/lib/api";

export default async function DetailNewsPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = await params;

  const { popularNews, relatedNews } = await getHomeData(category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main>
      <Breadcrumbs categoryName={categoryName} />

      <div className="flex lg:flex-row flex-col justify-between gap-10">
        <div className="flex flex-col">
          <NewsDetail categoryName={categoryName} />
          <Comments />
          <RelatedNews relatedNews={relatedNews} currentSlug={slug} />
        </div>
        <PopularNews news={popularNews} variant="sidebar" />
      </div>
    </main>
  );
}
