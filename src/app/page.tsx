import Image from "next/image";
import data from "./data.json";
import Link from "./Link";
import ThemeChanger from "./ThemeChanger";
import Card from "./Cards";

export default function Home() {


  return (
    <>
      <div className="flex flex-col mx-auto w-2/3 justify-center mt-16 px-8 text-secondary">


        <article className="w-2/3">
        <Image
          className="float-left
    rounded-full mb-0 mr-6
[clip-path:circle(70%_at_20%_30%)]
    [shape-outside:circle(70%_at_20%_30%)]
    md:[clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]
    md:[shape-outside:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]
"
          alt={data.name}
          key={Math.random()}
          src={data.avatar}
          width={180}
          height={180}
        />

          <h2 className="">{data.heading}</h2>
          <h1 className="font-bold text-xl">{data.name}</h1>

          <h2>{data.intro}</h2>

      {/* // Links */}
      <section className="flex justify-center mx-auto">
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
      </section>
        </article>
<section className="flex items-center gap-6 bg-primary">
{data.icons.map((icons, index) => (
<div className="flex flex-col items-center"><Image
    src={icons.logo}
    key={index}
    alt={icons.title}
    className="hover:drop-shadow-lg hover:animate-spin hover:scale-110 transition-all"
    width={60}
    height={80}
    priority />

    <span className="">{icons.title}</span>
    </div>
))}
</section>

<section className="break-normal flex flex-col justify-center mx-auto dark:text-red-900">
<h1 className="font-bold text-xl">About Me</h1>

<p>{data.about1}</p>
<p>{data.para2}</p>
<p>{data.para3}</p>

</section>

{/* <Card /> */}

<ThemeChanger />

      </div>
    </>
  );
}
