import ThemeChanger from "./ThemeChanger";
import HeaderSection from "./Header";
import Icons from "./Icons";
import AboutMe from "./About";

export default function Home() {
  return (
    <>
      <div className="flex flex-col mx-auto w-2/3 justify-center mt-16 px-8">
        <HeaderSection />
        <Icons />
        <AboutMe />
        <ThemeChanger />
      </div>
    </>
  );
}
