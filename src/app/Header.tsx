import Image from "next/image";
import data from "./data.json";
import Link from "./Link";


export default function HeaderSection() {

  return (
        <article className="w-2/3 font-sans pl-8">
        <Image
          className="float-left
    rounded-full mb-0 mr-6
[clip-path:circle(70%_at_20%_30%)]
    [shape-outside:circle(70%_at_20%_30%)]
    md:[clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]
    md:[shape-outside:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]
"
          alt={data.name}

          src={data.avatar}
          width={180}
          height={180}
        />

          <h2 className="">{data.heading}</h2>
          <h1 className="font-bold text-2xl">{data.name}</h1>

          <h2>{data.intro}</h2>

      {/* // Links */}
      <main className="flex justify-center mx-auto font-serif">
        {data.links.map((link, index) => (
          <Link key={index} {...link} />
        ))}

        {data.CV.map((cv, index) => (
          <Link
            key={index}
            download={"Download Andrew Grant CV"}
            {...cv}
          />
        ))}
      </main>
        </article>
);
};
