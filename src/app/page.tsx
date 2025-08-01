import Articles from "@/components/articles";
import Contact from "@/components/contact";
import Experiences from "@/components/experience";
import Text, { ScrollDownArrow, Ticker } from "@/components/hero/HighlightText";
import Projects from "@/components/projects";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="lg:h-screen flex flex-col justify-center lg:p-0 md:px-8 px-2" id="home">
        <Ticker />
        <div className="m-auto max-w-2xl">
          <Text />
          <ScrollDownArrow />
        </div>
      </div>

      <div className="lg:p-0 md:px-8 px-2">
        <Projects />
        <Experiences />
        <Articles />
        <Contact />
      </div>
    </div>
  );
}
