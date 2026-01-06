import Image from "next/image";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Introduce from "./components/Introduce";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Introduce />
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>

    </div>
  );
}
