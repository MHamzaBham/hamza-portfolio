import Heading from "@/app/(main)/ui/Heading";
import List from "./List";


export default function Projects() {
    return (
        <div className="my-20 max-w-4xl mx-auto"  id="projects">
            <Heading section="Projects" title="Bringing Ideas to Life" button="See all Projects"/>
            <List />
        </div>
    )
}