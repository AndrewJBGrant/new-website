import TextGradient from "./GradientText";

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
      target={"_blank"}
      key={Math.random()}
      className="flex items-center p-4 rounded-sm hover:scale-150 transition-all mb-3 "
    >
      <div className="flex flex-col">
        {/* <TextGradient text={title}/> */}
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>
    </a>
  );
}
