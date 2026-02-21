import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({
  categoryName,
}: {
  categoryName: string;
}) {
  return (
    <div className="flex items-center gap-2 text-lg py-16 font-normal text-primary-text">
      <Home className="text-secondary-text" /> Beranda{" "}
      <ChevronRight className="text-secondary-text" /> {categoryName}{" "}
      <ChevronRight className="text-secondary-text" /> Detail
    </div>
  );
}
