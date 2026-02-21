import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NewsItem } from "@/types/news";

export default function NewsCard({
  item,
  href,
}: {
  item: NewsItem;
  href: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="hover:bg-primary/15 hover:scale-105 cursor-pointer transition-all duration-250 flex flex-col p-2 rounded-lg"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={276}
          height={197}
          className="rounded-xl object-cover"
        />
        <h2 className="text-body-lg text-primary-text line-clamp-3 mt-4 mb-3">
          {item.title}
        </h2>
        <div className="flex flex-col md:flex-row">
          <span className="text-body-sm text-primary">
            {item.category.slice(0, 1).toUpperCase() + item.category.slice(1)}
          </span>
          <Dot className="hidden md:block text-secondary-text" />
          <span className="text-body-sm text-secondary-text">
            {new Date(item.isoDate).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </Link>
    </li>
  );
}
