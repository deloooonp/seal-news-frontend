import Image from "next/image";

import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export default function Headline() {
  return (
    <section className="py-18">
      <div className="flex justify-between mb-11">
        <div className="flex flex-col gap-4 max-w-lg">
          <h2 className="text-body-md text-secondary-text">Headline</h2>
          <h1 className="text-display text-primary-text">
            Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3
            Kualifikasi
          </h1>
          <p className="text-body text-secondary-text">
            Ketua Umum PSSI, Erick Thohir, buka suara soal kemungkinan Timnas
            Indonesia berpindah venue pertandingan jika lolos ke putaran ketiga
            Kualifikasi Piala Dunia 2026.
          </p>
          <span className="flex items-center gap-2 text-body-md text-secondary-text">
            <Calendar />
            22 Januari 2024
          </span>
          <button className="flex items-center gap-2 text-body-md text-primary">
            Baca Selengkapnya
            <ArrowRight />
          </button>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Image"
          width={550}
          height={300}
          className="rounded-2xl"
        />
      </div>
      <div className="flex justify-center gap-4 text-body-md text-primary-text">
        <ChevronLeft />
        <span>1</span>
        <span>dari</span>
        <span>5</span>
        <ChevronRight />
      </div>
    </section>
  );
}
