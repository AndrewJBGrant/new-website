import ThemeChanger from "./ThemeChanger";
import HeaderSection from "./Header";
import Icons from "./Icons";
import AboutMe from "./About";
import Footer from "./Footer";
import NavBar from "./navBar";

export default function Home() {
  return (
    <>
        <ThemeChanger />

        <NavBar />
        <HeaderSection />
      <div className="flex flex-col mx-auto w-1/2 justify-center mt-16 px-8">
        <AboutMe />
        <Icons />
      </div>
        <Footer />
    </>
  );
}
