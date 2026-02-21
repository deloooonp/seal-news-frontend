export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary text-background px-10 py-3 rounded-lg text-body-md w-fit hover:bg-primary/80 hover:scale-105 transition-all cursor-pointer">
      {children}
    </button>
  );
}
