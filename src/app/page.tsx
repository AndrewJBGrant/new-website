"use client";

import HeaderSection from "./Header";
import Icons from "./Icons";
import AboutMe from "./About";

import Projects from "./Projects";

import TestNav from "./Navigation/TestNav";

export default function Home() {
  return (
    <>
<div className="relative">


<TestNav />


        {/* <section className="flex flex-col mx-auto h-full p-12">
          <HeaderSection />
          <AboutMe />
           <Icons />

           <Projects />
        </section> */}
</div>

    </>
  );
}
