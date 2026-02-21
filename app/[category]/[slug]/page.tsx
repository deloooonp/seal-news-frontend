import PopularNews from "@/components/news/PopularNews";
import { getHomeData } from "@/lib/api";
import { ChevronRight, Dot, Home } from "lucide-react";
import Image from "next/image";

export default async function DetailNewsPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = await params;

  const { popularNews } = await getHomeData();

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main>
      <div className="flex items-center gap-2 text-lg py-16 font-normal text-primary-text">
        <Home /> Beranda <ChevronRight /> {categoryName} <ChevronRight /> Detail
      </div>

      <div className="flex justify-between gap-10">
        <div className="flex flex-col">
          <h1 className="text-display">Judul Berita</h1>
          <div className="flex items-center gap-1">
            <span className="text-primary">{categoryName}</span>
            <Dot className="text-secondary-text" />
            <span className="text-secondary-text">Tanggal</span>
          </div>
          <div className="mt-9 mb-18">
            <Image
              src="https://images.unsplash.com/photo-1761839257789-20147513121a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="News Detail"
              width={855}
              height={571}
              className="rounded-lg"
            />
            <span className="text-secondary-text text-body-md mt-3">
              Image Description
            </span>
          </div>
          <p className="text-body-md mb-35">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            recusandae necessitatibus vitae ratione eius aliquam odit esse
            placeat! Quasi qui, itaque nulla quia animi nobis nisi repudiandae
            praesentium possimus placeat. Nisi rem ad corrupti vitae consequatur
            unde, veritatis quis asperiores fugit, mollitia ipsam aperiam ea
            animi! Voluptatibus consectetur quas saepe nihil est odio quos,
            sequi consequuntur quaerat eaque porro ab, incidunt nisi minima,
            animi dicta neque. Cupiditate, amet. Nisi, praesentium deserunt!
            Consequatur nobis tempore repellendus? Quia voluptas numquam ipsam
            deleniti animi ratione illum unde, tempore pariatur possimus
            consectetur similique dignissimos quas exercitationem aperiam sunt
            fuga, quibusdam ipsa alias ullam? Ullam.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-primary w-1 h-8 rounded-xl"></div>
            <h2 className="text-section-title">Komentar</h2>
          </div>
        </div>
        <div className="">
          <PopularNews news={popularNews} variant="sidebar" />
        </div>
      </div>
    </main>
  );
}
