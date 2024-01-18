import TextGradient from "./GradientText";
import data from "./data.json";

export default function AboutMe() {

  return (
    <article className="min-h-screen" id="About">

      <h2 className="font-bold text-4xl">about Me</h2>

      <section className="mb-4 mt-6 text-xl font-light leading-relaxed grid gap-2">
      <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">{data.about1}</p>
      <p>{data.para2}</p>
      <p>{data.para3}</p>
      </section>
    </article>
  );
}
