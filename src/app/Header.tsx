import Image from "next/image";
import data from "./data.json";
import Link from "./Link";

export default function HeaderSection() {

let intervalId: any

function changeColor() {

if (!intervalId) {

intervalId = setInterval(flashText, 1000)
}
}

function flashText() {

}

  return (
        <header className="font-sans">
        <Image
          className="border-solid border-2 border-sky-500 dark:border-gray-200 rounded-full"
          alt={data.name}
          src={data.avatar}
          width={160}
          height={160}
        />

          <h2 className="text-xl text-textsecondary dark:text-textsecondary">{data.heading}</h2>
{/*

   <div className="flex">
      <span className="animated-text">Well</span>
      <span className="animated-text animate-delay-2">Then</span>
      <span className="animated-text animate-delay-4">Lets See</span>
    </div> */}


<div>

{/* <h3 className="animation-delay-[4000ms] font-bold bg-gradient-to-r from-white via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
There.
</h3>

<h3 className="font-bold bg-gradient-to-r from-white via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient animation-delay-[6000ms]">
Goodbye
</h3> */}

</div>





          <h1>{data.name}</h1>

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

        </header>
);
};
