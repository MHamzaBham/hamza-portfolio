import Heading from "@/app/ui/Heading";
import List from "./List";


export default function Articles() {
  return (
    <div className="mb-20 max-w-4xl mx-auto mt-40" id="articles">
      <Heading section="Articles" title="Sharing Insights Along the Way" button="See all Articles"/>
      <List />
    </div>
  );
}
