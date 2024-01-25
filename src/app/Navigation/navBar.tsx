"use client";

// import useNav from "../Hooks/use-nav";
import ThemeSwitch from "../ThemeChanger";
import data from "../data.json";
import { FaGithub } from "react-icons/fa";
//import NavLink from "./NavLinks";
import Link from "next/link";

import { useRef, useEffect, useState } from "react";

const getDimensions = (ele: any) => {
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  const { height } = ele.getBoundingClientRect();
  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (e: any) => {
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  e.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


export default function NavBar() {
  // const [visSection, setVisSection] = useState<string>();

  // const headerRef = useRef(null);
  // const aboutRef = useRef(null);
  // const skillsRef = useRef(null);
  // const projectsRef = useRef(null);

  // const sectionRefs = [
  //   { section: "About", ref: aboutRef },
  //   { section: "Skills", ref: skillsRef },
  //   { section: "Projects", ref: projectsRef },
  // ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { height: headerHeight } = getDimensions(headerRef.current);
  //     const scrollPosition = window.scrollY + headerHeight;

  //     const selected = sectionRefs.find(({ section, ref }) => {
  //       const element = ref.current;

  //       if (element) {
  //         const { offsetBottom, offsetTop } = getDimensions(element);
  //         return scrollPosition > offsetTop && scrollPosition < offsetBottom;
  //       }
  //     });

  //     if (selected && selected.section !== visSection) {
  //       console.log(selected.section, "What have we got?");

  //       setVisSection(selected.section);
  //     } else if (!selected && visSection) {
  //       setVisSection(undefined);
  //     }
  //   };

  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [visSection]);

  // const navBarLinks = [
  //   {
  //     name: "Home",
  //     href: "#",
  //     activeSegment: null,
  //   },
  //   {
  //     name: "about",
  //     href: "#",
  //     activeSegment: "about",
  //   },
  //   {
  //     name: "Icons",
  //     href: "#",
  //     activeSegment: "Icons",
  //   },
  // ];

  return (
    <nav className="bg-primary dark:bg-primary text-text fixed top-0 h-screen border-solid border-2 border-sky-500">
      <ul id="content" className="m-0 p-0 list-none grid gap-2 py-8">
        <div className="grid gap-2">
          <div>
            <button
              // onClick={() => {
              //   scrollTo(skillsRef.current);
              // }}
            >
              Home
            </button>
          </div>
          <div>
            <button>About</button>
          </div>
          <div>
            <button>Skills</button>
          </div>
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

// ref={headerRef} ref={skillsRef} ref={aboutRef}
