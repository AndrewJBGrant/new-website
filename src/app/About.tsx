import data from "./data.json";

export default function AboutMe() {
  return (
    <article className="break-normal flex flex-col justify-center mx-auto">
      <h1 className="font-bold text-2xl">About Me</h1>
      <p>{data.about1}</p>
      <p>{data.para2}</p>
      <p>{data.para3}</p>
    </article>
  );
}
