import Articles from "@/components/articles";
import Contact from "@/components/contact";
import Experiences from "@/components/experience";
import Text, { ScrollDownArrow, Ticker } from "@/components/hero/HighlightText";
import Projects from "@/components/projects";
import TooltipDefault from "./ui/Tooltip";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="lg:h-screen flex flex-col justify-center lg:p-0 px-8" id="home">
        <Ticker />
        <div className="w-2xl m-auto -mt-16">
          <Text />
          <ScrollDownArrow />
        </div>
      </div>

      <div className="lg:p-0 px-8">
        <Projects />
        <Experiences />
        <Articles />
        <Contact />
      </div>
    </div>
  );
}
