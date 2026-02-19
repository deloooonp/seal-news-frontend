import Link from "next/link";

export default function Navbar() {
  const navItems = [
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
  return (
    <div className="flex flex-row py-7 justify-between">
      <Link href="/" className="flex gap-3">
        <img src="/logo.svg" alt="Berita Kini" className="h-11 w-auto" />
        <p className="flex items-center text-xl font-semibold">Berita Kini</p>
      </Link>
      <ul className="flex gap-8 text-body-medium items-center">
        {navItems.map((item) => (
          <Link
            className="hover:text-primary transition-colors duration-300"
            href={item.href}
            key={item.text}
          >
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
}
