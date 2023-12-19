import TextGradient from "./GradientText";
import data from "./data.json";

export default function AboutMe() {

  return (
    <article>

      <h1>About Me</h1>
      <p>{data.about1}</p>
      <p>{data.para2}</p>
      <p>{data.para3}</p>

    </article>
  );
}
