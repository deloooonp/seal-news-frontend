import { Dot } from "lucide-react";
import Image from "next/image";

export default function NewsDetail({ categoryName }: { categoryName: string }) {
  return (
    <section>
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
        recusandae necessitatibus vitae ratione eius aliquam odit esse placeat!
        Quasi qui, itaque nulla quia animi nobis nisi repudiandae praesentium
        possimus placeat. Nisi rem ad corrupti vitae consequatur unde, veritatis
        quis asperiores fugit, mollitia ipsam aperiam ea animi! Voluptatibus
        consectetur quas saepe nihil est odio quos, sequi consequuntur quaerat
        eaque porro ab, incidunt nisi minima, animi dicta neque. Cupiditate,
        amet. Nisi, praesentium deserunt! Consequatur nobis tempore repellendus?
        Quia voluptas numquam ipsam deleniti animi ratione illum unde, tempore
        pariatur possimus consectetur similique dignissimos quas exercitationem
        aperiam sunt fuga, quibusdam ipsa alias ullam? Ullam.
      </p>
    </section>
  );
}
