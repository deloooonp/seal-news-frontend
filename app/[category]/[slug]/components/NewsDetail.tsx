import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NewsItem } from "@/types/news";
import Button from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

export default function NewsDetail({
  newsItem,
  categoryName,
}: {
  newsItem?: NewsItem;
  categoryName: string;
}) {
  if (!newsItem) return <div>Berita tidak ditemukan</div>;
  return (
    <section className="mb-30">
      <h1 className="text-display">{newsItem.title}</h1>
      <div className="flex items-center gap-1">
        <span className="text-primary">{categoryName}</span>
        <Dot className="text-secondary-text" />
        <span className="text-secondary-text">
          {formatDate(newsItem.isoDate, "long")}
        </span>
      </div>
      <div className="mt-9 mb-18">
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          width={855}
          height={571}
          className="rounded-lg mb-2"
        />
        <span className="text-secondary-text italic text-body-md">
          {newsItem.title} || CNN News
        </span>
      </div>
      <p className="text-body-md mb-10">{newsItem.contentSnippet}</p>
      <Button>
        <Link href={newsItem.link} target="_blank">
          Baca Selengkapnya
        </Link>
      </Button>
    </section>
  );
}
