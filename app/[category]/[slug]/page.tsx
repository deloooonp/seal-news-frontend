export default function DetailNewsPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;

  return (
    <main>
      <h1>Kategori: {category}</h1>
      <p>Slug: {slug}</p>
    </main>
  );
}
