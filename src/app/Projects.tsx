import data from "./data.json"
import Tags from "./Tags"

export interface Project {
  title: string
  tags: string[]
}


export default function Projects() {


const myProjects = data.projects.map((project) => {
   return project.tags
})

// console.log(myProjects)

  return (
    <article className="min-h-screen" id="About">

      <h2 className="font-bold text-4xl">Project</h2>

      <section className="mb-4 mt-6 text-xl font-light leading-relaxed grid gap-2">
{myProjects}
      </section>
    </article>
  );
}
