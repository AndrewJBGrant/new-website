import ThemeSwitch from "./ThemeChanger";
import data from "./data.json";
import { FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="bg-primary dark:bg-primary text-text fixed top-0 h-screen">
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Skils</li>
        <li>Projects</li>
        <a href="#footer">LINKTOME</a>
      </ul>
      <span className="flex flex-row">
        <ThemeSwitch />
        <a href={data.githubLink} target={"_blank"}>
          <FaGithub />
        </a>
      </span>
    </nav>
  );
}
