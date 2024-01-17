"use client";

import ThemeSwitch from "../ThemeChanger";
import data from "../data.json";
import { FaGithub } from "react-icons/fa";
//import NavLink from "./NavLinks";
import Link from "next/link";
import { usePathname } from 'next/navigation'


export default function NavBar() {

const pathName = usePathname()

const navBarLinks = [
{
  name: "home",
  link: "#Home"
},
{
  name: "about",
  link: "#about"
},
{
 name: "Icons",
 link: "#Icons"
},
]




  return (
    <nav className="bg-primary dark:bg-primary text-text fixed top-0 h-screen">
      <ul className="m-0 p-0 list-none grid gap-2 py-8">
        {/* <NavLink href="#Home">
          Home
        </NavLink>
        <NavLink href="#About">About Me</NavLink>
        <NavLink href="#Icons">Skills</NavLink> */}

<div className="grid gap-2">
{navBarLinks.map(({link, name}) => (
<Link
key={name}
href={link}
className={pathName === link ? "bg-orange-600" : "bg-slate-600" }
>{name}
{link}</Link>

))}

<span className="bg-green-500">
  {pathName}
  </span>


</div>






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
