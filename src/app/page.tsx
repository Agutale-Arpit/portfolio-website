import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import IntroDescription from "@/components/IntroDescription";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col ml-10 mr-10">
        <div className="p-4">
          <Navbar />
        </div>
        <div className="flex">
          <div className="w-2/12"></div>
          <div className="flex flex-col">
            <IntroDescription />
            <div id="Experiences">
              <Experiences />
            </div>
            <div id="Projects">
              <Projects />
            </div>
            <div id="Education">
              <Education />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
