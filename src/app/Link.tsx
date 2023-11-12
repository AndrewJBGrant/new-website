export default function Link({
  href,
  title,
}: {
  href: string;
  title: string;
  download?: any;
}) {
  return (
    <a
      href={href}
      key={Math.random()}
      className="flex items-center p-4 w-full rounded-sm hover:scale-150 transition-all mb-3"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </a>
  );
}
