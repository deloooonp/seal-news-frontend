import { AdsBanner, Headline } from "./components";
import { PopularNews, NewsContainer } from "@/components/news";
import { getHomeData } from "@/lib/api";

export default async function page() {
  const { headlineNews, popularNews, recommendedNews } = await getHomeData();

  return (
    <main>
      <Headline news={headlineNews} />
      <PopularNews news={popularNews} />
      <NewsContainer news={recommendedNews} header="Rekomendasi Untuk Anda" />
      <AdsBanner />
    </main>
  );
}
