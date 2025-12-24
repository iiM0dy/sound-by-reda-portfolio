import Image from "next/image";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <div id="projects">
        <Projects />
      </div>
      <div className="t-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#1A1A1A]" id="contact">
        <Footer />
      </div>
    </div>
  );
}
