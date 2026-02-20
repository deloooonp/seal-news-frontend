import Link from "next/link";

import { footerLinks, socialLinks } from "@/constants/navigation";
import { Logo } from "../icons";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 bg-[#2c3c4d] text-background">
      <div className="flex flex-row justify-between mx-auto max-w-330">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-5">
            <Logo size={68} />
            <p className="text-3xl font-semibold">Berita Kini</p>
          </div>
          <p className="text-lg font-thin mt-5 mb-11">
            © {new Date().getFullYear()} Berita Kini. All Rights Reserved.
          </p>
          <p className="text-body-xl mb-5">Ikuti Kami</p>
          <ul className="flex flex-row gap-6 text-foreground">
            {socialLinks.map(({ name, Icon, href }) => (
              <li key={name}>
                <Link href={href}>
                  <Icon
                    className="hover:scale-110 hover:text-primary transition-all duration-200"
                    color="white"
                    size={40}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-body-xl mb-5">Telusuri</h2>
          <ul className="flex flex-col gap-4 text-body-md">
            {footerLinks.telusuri.map((item) => (
              <li key={item.text}>
                <Link
                  className="hover:text-primary transition-colors"
                  href={item.href}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-body-xl mb-5">Bantuan</h2>
          <ul className="flex flex-col gap-4 text-body-md">
            {footerLinks.bantuan.map((item) => (
              <li key={item.text}>
                <Link
                  className="hover:text-primary transition-colors"
                  href={item.href}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-body-xl mb-5">Berlangganan Berita Terbaru</h2>
          <div className="flex justify-between items-center h-16 w-84 bg-background rounded-lg p-2 text-foreground">
            <input
              type="text"
              placeholder="Masukan email"
              className="outline-none"
            />
            <button className="flex justify-center items-center h-12 w-12 bg-primary rounded-lg p-1 cursor-pointer hover:bg-primary/80 transition-all hover:scale-110">
              <Send className="text-background" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
