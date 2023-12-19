import data from "./data.json"
import { FaGithub } from "react-icons/fa";


export default function Footer() {


return (

  <footer id="footer">
  Get in touch: andrewgrant2009@hotmail.com
  Built with Next.js 13 & Tailwind


     <a href={data.githubLink} target={"_blank"}>
      <FaGithub />
      </a>

  </footer>


);
}
