import { Comments, NewsDetail, RelatedNews } from "./components";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PopularNews from "@/components/news/PopularNews";
import { getHomeData } from "@/lib/api";
import { slugify } from "@/lib/utils";

export default async function DetailNewsPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = await params;

  const { popularNews, relatedNews } = await getHomeData(category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const newsItem = relatedNews.find((item) => slugify(item.title) === slug);

  return (
    <main>
      <Breadcrumbs categoryName={categoryName} />

      <div className="flex lg:flex-row flex-col justify-between gap-10">
        <div className="flex flex-col">
          <NewsDetail newsItem={newsItem} categoryName={categoryName} />
          <Comments />
          <RelatedNews relatedNews={relatedNews} currentSlug={slug} />
        </div>
        <aside className="w-full">
          <PopularNews news={popularNews} variant="sidebar" />
        </aside>
      </div>
    </main>
  );
}
