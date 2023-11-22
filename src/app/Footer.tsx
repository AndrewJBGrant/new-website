import data from "./data.json"
import { FaGithub } from "react-icons/fa";


export default function Footer() {


return (

  <footer className="bg-slate-500 p-6 flex flex-col border-t border-amber-700">
  <span>Get in touch: andrewgrant2009@hotmail.com</span>
  <span>Built with Next.js 13 & Tailwind</span>


     <a href={data.githubLink} target={"_blank"}>
      <FaGithub />
      </a>

  </footer>


);
}
