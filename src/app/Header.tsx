import Image from "next/image";
import data from "./data.json";
import Link from "./Link";


export default function HeaderSection() {

  return (
        <article className="w-2/3 font-sans">
        <Image
          className="
    rounded-full"
          alt={data.name}
          src={data.avatar}
          width={160}
          height={160}
        />








          <h2 className="text-xl text-textsecondary dark:text-textsecondary">{data.heading}</h2>



<div className="flex text-2xl">


<h3 className="font-bold bg-gradient-to-r from-white via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient animation-delay-[1000ms] ">Hello.
</h3>

<h3 className="animation-delay-[4000ms] font-bold bg-gradient-to-r from-white via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
There.
</h3>

<h3 className="font-bold bg-gradient-to-r from-white via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient animation-delay-[6000ms]">
Goodbye
</h3>
</div>





          <h1 className="font-bold text-2xl">{data.name}</h1>

          <h2>{data.intro}</h2>

      {/* // Links */}
      <section className="flex justify-center mx-auto font-serif
      text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
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
);
};
