import HeaderSection from "./Header";
import Icons from "./Icons";
import AboutMe from "./About";

export default function Home() {
  return (
    <>
      <div className="col-start-2 col-end-9 m-12 border border-emerald-400">
        <HeaderSection />
        <AboutMe />
        {/* <Icons /> */}
      </div>
    </>
  );
}
