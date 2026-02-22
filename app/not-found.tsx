import Link from "next/link";
import { Home } from "lucide-react";
import Logo from "@/components/icons/Logo";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="mb-8">
        <Logo className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-display text-primary-text mb-2">404</h1>
        <p className="text-body-xl text-primary-text">
          Halaman Tidak Ditemukan
        </p>
      </div>

      <p className="text-body-md text-secondary-text max-w-md mb-10">
        Maaf, berita atau halaman yang Anda cari tidak tersedia atau sudah
        dipindahkan. Mari kembali ke beranda untuk membaca berita terbaru
        lainnya.
      </p>

      <Button>
        <Link href="/" className="flex gap-2 items-center py-1">
          <Home size={20} />
          Kembali ke Beranda
        </Link>
      </Button>
    </div>
  );
}
