import HeaderSection from "./Header";
import Icons from "./Icons";
import AboutMe from "./About";

export default function Home() {
  return (
    <>
      <div className="col-start-2 col-end-9 mx-auto mt-16 px-8 border border-emerald-400">
        <HeaderSection />
        <AboutMe />
        <Icons />
      </div>
    </>
  );
}
