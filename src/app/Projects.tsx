import data from "./json/projects.json";
import Tags from "./Tags";

export interface Project {
  title: string;
  tags: string[];
}

export default function Projects() {
  // const myProjects = data.projects.map((project) => {
  //    return project.tags
  // })

  // console.log(myProjects)
  // const textBlockElement = document.createElement("p");
  // // Replace newline characters with actual line breaks
  // const inneTTT = data.text.replace(/\n/g, "\n");
  // textBlockElement.innerText = inneTTT;
  // textBlocksContainer.appendChild(textBlockElement);

  const test = data.text;

  // console.log(test);
  // console.log(typeof(test));

  // const myJSON = JSON.stringify(test);

  return (
    <article>
      <div className="flex">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>





      </div>
      {/*
      <section className="mb-4 mt-6 text-xl font-light leading-relaxed grid gap-2">
      </section> */}

<div className="whitespace-pre-wrap font-medium">
{test}
</div>


    </article>
  );
}
