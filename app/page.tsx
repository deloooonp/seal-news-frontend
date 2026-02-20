import Headline from "./components/Headline";
import { getCNNNews } from "@/lib/api";

export default async function page() {
  const news = await getCNNNews();
  return (
    <main>
      <Headline news={news} />
    </main>
  );
}
