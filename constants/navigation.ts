import { Youtube, Instagram, Facebook } from "@/components/icons";

export const navItems = [
  {
    text: "Beranda",
    href: "/",
  },
  {
    text: "Terbaru",
    href: "/",
  },
  {
    text: "Hiburan",
    href: "/",
  },
  {
    text: "Gaya Hidup",
    href: "/",
  },
  {
    text: "Olahraga",
    href: "/",
  },
  {
    text: "Nasional",
    href: "/",
  },
  {
    text: "Internasional",
    href: "/",
  },
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
