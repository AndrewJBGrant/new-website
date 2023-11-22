import TextGradient from "./GradientText";
import data from "./data.json";

export default function AboutMe() {
  return (
    <article className="break-normal flex flex-col justify-center border border-red-700 text-xl leading-7">

      <h1 className="font-bold text-3xl my-6">About Me</h1>
      <p>{data.about1}</p>
      <p>{data.para2}</p>
      <p>{data.para3}</p>

    </article>
  );
}
