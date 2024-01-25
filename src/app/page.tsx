"use client";

import HeaderSection from "./Header";
import Icons from "./Icons";
import AboutMe from "./About";
import NavBar from "./Navigation/navBar";

export default function Home() {

function hideNavBar() {
const x  = document.getElementById("navNav")!;

console.log(x)


if (x?.style.display === "none") {
  x.style.display = "block";
} else {
x.style.display = "none";
  }
}



  return (
    <>
      <div className="grid grid-cols-9">
        <section className="col-start-1 col-span-1 border border-stone-700">
          <NavBar />
        </section>
        <button className="border border-sky-800 flex justify-center items-center" onClick={hideNavBar}>HIDE NAVBAR</button>

        <section className="flex flex-1 h-full flex-col items-center p-12 col-start-2 col-end-9">
          <HeaderSection />
          <AboutMe />
          {/* <Icons /> */}
        </section>

      </div>
    </>
  );
}
