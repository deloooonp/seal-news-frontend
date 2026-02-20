import { Headline, PopularNews } from "./components";
import { getHomeData } from "@/lib/api";

export default async function page() {
  const { headlineNews, popularNews } = await getHomeData();

  return (
    <main>
      <Headline news={headlineNews} />
      <PopularNews news={popularNews} />
    </main>
  );
}
