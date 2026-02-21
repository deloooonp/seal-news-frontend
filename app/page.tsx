import { AdsBanner, Headline, RecommendedNews } from "./components";
import PopularNews from "@/components/news/PopularNews";
import { getHomeData } from "@/lib/api";

export default async function page() {
  const { headlineNews, popularNews, recommendedNews } = await getHomeData();

  return (
    <main>
      <Headline news={headlineNews} />
      <PopularNews news={popularNews} />
      <RecommendedNews news={recommendedNews} />
      <AdsBanner />
    </main>
  );
}
