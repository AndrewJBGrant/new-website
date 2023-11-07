export default function LinkCard({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-4 w-full rounded-sm hover:scale-110 transition-all border border-gray-300 mb-3"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </a>
  );
}
