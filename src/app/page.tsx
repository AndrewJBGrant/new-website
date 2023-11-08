import Image from "next/image";
import data from "./data.json";
import LinkCard from "./LInkCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col mx-auto w-full justify-center mt-16 px-8">


        <article>
        <Image
          className="float-left aspect-[1/1] lg:aspect-[1/2]
    rounded-full mb-0 mr-6

    [shape-outside:circle(70%_at_20%_30%)]
   
    md:[shape-outside:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"
          alt={data.name}
          src={data.avatar}
          width={120}
          height={120}
        />

          <p className="">{data.heading}</p>
          <h1 className="font-bold text-xl">{data.name}</h1>

          <p>{data.intro}</p>
        </article>






      {/* // Links */}
      <section className="flex justify-center mx-auto">
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}

        {data.CV.map((cv) => (
          <LinkCard
            key={cv.href}
            download={"Download Andrew Grant CV"}
            {...cv}
          />
        ))}
      </section>
      </div>
    </>
  );
}
