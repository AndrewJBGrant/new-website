import ThemeChanger from "./ThemeChanger";
import HeaderSection from "./Header";
import Icons from "./Icons";
import AboutMe from "./About";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col mx-auto w-1/2 justify-center mt-16 px-8">
        <ThemeChanger />
        <HeaderSection />
        <AboutMe />
        <Icons />

        <Footer />
      </div>
    </>
  );
}
