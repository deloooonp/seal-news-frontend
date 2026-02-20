import { Headline, PopularNews } from "./components";
import { getCNNNews } from "@/lib/api";

export default async function page() {
  const news = await getCNNNews();
  return (
    <main>
      <Headline news={news} />
      <PopularNews news={news} />
    </main>
  );
}
