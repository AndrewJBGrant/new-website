"use client";

// import useNav from "../Hooks/use-nav";
import ThemeSwitch from "../ThemeChanger";
import data from "../data.json";
import { FaGithub } from "react-icons/fa";
//import NavLink from "./NavLinks";
import Link from "next/link";

import { useRef } from "react";



export default function NavBar()  {

//   const listRef = useRef(null);

// function scrollToIndex(index) {
//   const listNode = listRef.current;
// }


// const {
//    isHomeActive,
//     isAboutActive,
//     isIconsActive,
// } = useNav();




const navBarLinks = [
{
  name: "Home",
  href: "#",
  activeSegment: null,
},
{
  name: "about",
  href: "#",
  activeSegment: "about",
},
{
 name: "Icons",
 href: "#",
 activeSegment: "Icons",
},
]

// console.log(segment, "Any here?")


  return (
    <nav className="bg-primary dark:bg-primary text-text fixed top-0 h-screen">
      <ul className="m-0 p-0 list-none grid gap-2 py-8">


<div className="grid gap-2">


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
