import data from "./json/projects.json"
import Tags from "./Tags"

export interface Project {
  title: string
  tags: string[]
}


export default function Projects() {


// const myProjects = data.projects.map((project) => {
//    return project.tags
// })

// console.log(myProjects)


const test = data.text;

console.log(test);
console.log(typeof(test));

const myJSON = JSON.stringify(test);

  return (
    <article className="h-screen mx-auto max-w-2xl px-5 py-12">

  <div className="flex">

<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>

<article>


{test}

</article>


  </div>
{/*
      <section className="mb-4 mt-6 text-xl font-light leading-relaxed grid gap-2">
      </section> */}
    </article>
  );
}
