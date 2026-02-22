"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ads } from "@/constants/ads";

export default function AdsBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mb-12 relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {ads.map((ad, index) => (
          <div
            key={index}
            className={`min-w-full relative py-12 px-6 lg:px-24 rounded-2xl ${ad.bgColor} text-white`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 border border-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 right-1/4 w-32 h-32 border border-white/20 rounded-full translate-y-1/2" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              <div className="flex flex-col gap-4 w-full lg:w-2/5">
                <h1 className="text-display text-white">{ad.title}</h1>
                <p className="text-body-lg text-white/90">{ad.description}</p>
              </div>

              <div className="flex lg:flex-row flex-col relative w-1/2 h-64 items-center justify-center">
                <div className="absolute -rotate-12 -translate-x-32 translate-y-4 z-10">
                  <div className="bg-background p-2 rounded-lg shadow-xl">
                    <Image
                      src={ad.image}
                      alt="ads-1"
                      width={200}
                      height={150}
                      className="rounded object-cover h-24 w-40"
                    />
                    <p className="text-body-sm text-foreground mt-1 text-center">
                      Musium Brawijaya
                    </p>
                  </div>
                </div>
                <div className="absolute z-30 translate-y-8">
                  <div className="bg-background p-2 rounded-lg shadow-xl">
                    <Image
                      src={ad.image}
                      alt="ads-2"
                      width={240}
                      height={180}
                      className="rounded object-cover h-32 w-52"
                    />
                    <p className="text-body-sm text-foreground mt-1 text-center">
                      Kayoetangan
                    </p>
                  </div>
                </div>
                <div className="absolute rotate-12 translate-x-32 -translate-y-4 z-20">
                  <div className="bg-background p-2 rounded-lg shadow-xl">
                    <Image
                      src={ad.image}
                      alt="ads-3"
                      width={220}
                      height={160}
                      className="rounded object-cover h-28 w-44"
                    />
                    <p className="text-body-sm text-foreground mt-1 text-center">
                      Kebun Binatang
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {ads.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-primary w-6"
                : "bg-secondary-text hover:bg-stroke cursor-pointer"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
