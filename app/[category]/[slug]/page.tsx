import { Comments, NewsDetail, RelatedNews } from "./components";
import { Breadcrumbs } from "@/components/ui";
import PopularNews from "@/components/news/PopularNews";
import { getHomeData } from "@/lib/api";

export default async function DetailNewsPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = await params;

  const { popularNews, relatedNews } = await getHomeData(category);
  const newsItem = relatedNews.find((item) => item.href.endsWith(slug));

  return (
    <main>
      <Breadcrumbs categoryName={newsItem?.categoryLabel ?? category} />

      <div className="flex lg:flex-row flex-col justify-between gap-10">
        <div className="flex flex-col">
          <NewsDetail newsItem={newsItem} />
          <Comments />
          <RelatedNews relatedNews={relatedNews} currentSlug={slug} />
        </div>
        <aside className="w-full">
          <PopularNews
            news={popularNews}
            variant="sidebar"
            currentSlug={slug}
          />
        </aside>
      </div>
    </main>
  );
}
