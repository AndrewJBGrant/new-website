"use client";

// import HeaderSection from "./Header";
import Icons from "./Icons";
import AboutMe from "./About";

import Projects from "./Projects";

// import TestNav from "./Navigation/TestNav";
import TestingNavBar from "./Navigation/TestingNav";

export default function Home() {

// const elem = document.getElementById("About");

// console.log(typeof(elem), "What is about??")


  return (
    <>
<div className="flex flex-col">

{/* <aside className="flex-shrink">
{/* <TestNav /> */}
{/* </aside> */}

<TestingNavBar />

        <main className="flex-grow flex flex-col h-full p-12">



          {/* <HeaderSection /> */}
          <AboutMe />
           <Icons />

           <Projects />
        </main>
</div>

    </>
  );
}
