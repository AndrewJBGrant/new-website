"use client";

import ThemeSwitch from "../ThemeChanger";
import data from "../data.json";
import { FaGithub } from "react-icons/fa";
//import NavLink from "./NavLinks";
import Link from "next/link";
// import { usePathname } from 'next/navigation'

import { useSelectedLayoutSegment } from "next/navigation";


export default function NavBar()  {
  const segment = useSelectedLayoutSegment()


// const pathName = usePathname()

const navBarLinks = [
{
  name: "Home",
  href: "#Home",
  activeSegment: null,
},
{
  name: "about",
  href: "#about",
  activeSegment: "about",
},
{
 name: "Icons",
 href: "#Icons",
 activeSegment: "Icons",
},
]

console.log(segment, "Any here?")


  return (
    <nav className="bg-primary dark:bg-primary text-text fixed top-0 h-screen">
      <ul className="m-0 p-0 list-none grid gap-2 py-8">


<div className="grid gap-2">



{/* {navBarLinks.map(({link, name}) => (
<Link
key={name}
href={link}
className={pathName === link ? "bg-red-600" : "bg-slate-600"}
>{name}
{link}</Link>

))} */}
{/* {navBarLinks.map((linked) => {
  const isActive = pathName.startsWith(linked.link)

return (
  <Link
  className={isActive ? "bg-orange-700" : "bg-green-600"}
  href={linked.link}
  key={linked.name}
>
  {linked.name}
</Link>
)
})} */}

{navBarLinks.map((item) => (
<Link
key={item.name}
href={item.href}
className={segment === item.activeSegment ? "bg-amber-600" : "bg-fuchsia-600"}
>
  {item.name}
</Link>

))}



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
