// import ThemeChanger from "./ThemeChanger";
import HeaderSection from "./Header";
import Icons from "./Icons";
import AboutMe from "./About";
// import Footer from "./Footer";
import NavBar from "./Navigation/navBar";

export default function Home() {
  return (
    <>
      {/* <ThemeChanger /> */}
      <div className="col-span-3">
        <NavBar />
      </div>
      <div className="col-start-2 col-end-9 mx-auto mt-16 px-8 border border-emerald-400">
        <HeaderSection />
        <AboutMe />
        <Icons />
        {/* <Footer /> */}
      </div>
    </>
  );
}
