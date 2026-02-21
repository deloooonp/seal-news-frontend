import { Youtube, Instagram, Facebook } from "@/components/icons";
import { categories } from "./categories";

export const navItems = [
  { text: "Beranda", href: "/" },
  { text: "Terbaru", href: "/terbaru" },
  ...categories.map((cat) => ({
    text: cat
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    href: `/${cat}`,
  })),
];

export const footerLinks = {
  telusuri: navItems,
  bantuan: [
    { text: "Kontak Kami", href: "/kontak" },
    { text: "Laporan Pembajakan", href: "/laporan" },
    { text: "Kebijakan", href: "/kebijakan" },
  ],
};

export const socialLinks = [
  { name: "Youtube", Icon: Youtube, href: "#" },
  { name: "Instagram", Icon: Instagram, href: "#" },
  { name: "Facebook", Icon: Facebook, href: "#" },
];
