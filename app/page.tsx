import { Headline, PopularNews, RecommendedNews } from "./components";
import { getHomeData } from "@/lib/api";

export default async function page() {
  const { headlineNews, popularNews, recommendedNews } = await getHomeData();

  console.log(recommendedNews);

  return (
    <main>
      <Headline news={headlineNews} />
      <PopularNews news={popularNews} />
      <RecommendedNews news={recommendedNews} />
    </main>
  );
}
