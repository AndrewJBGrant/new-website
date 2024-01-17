import TextGradient from "./GradientText";
import data from "./data.json";

export default function AboutMe() {

  return (
    <article className="grid gap-2" id="About">

      <h1>About Me</h1>
      <p className=" first-letter:text-7xl first-letter:font-bold
  first-letter:mr-3 first-letter:float-left">{data.about1}</p>
      <p>{data.para2}</p>
      <p>{data.para3}</p>
       <p>{data.about1}</p>
      <p>{data.para2}</p>
      <p>{data.para3}</p>
       <p>{data.about1}</p>
      <p>{data.para2}</p>
      <p>{data.para3}</p>

    </article>
  );
}
