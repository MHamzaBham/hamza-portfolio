import { CiLocationArrow1 } from "react-icons/ci";
import { projects } from "@/constants/projects";
import { TechIcon } from "@/components/projects/Project";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="my-20 max-w-4xl mx-auto font-[poppins]">
      {/* Cover Image */}
      <div className="rounded-3xl overflow-hidden shadow-2xl mb-10">
        <img
          src={project.image}
          alt={project.name}
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Title & Subtitle */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
          {project.name}
        </h1>
        <p className="text-gray-300 leading-relaxed mt-2">
          {project.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-10">
        <a href={project.github} target="_blank">
          <button
            type="button"
            className="group cursor-pointer py-2.5 px-5 me-2 mb-2 text-xs font-medium  focus:outline-none rounded-lg border  focus:z-10  bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 flex items-center gap-2 transition-all duration-300"
          >
            GitHub
            <CiLocationArrow1 className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </a>
        <a href={project.live} target="_blank">
          <button
            type="button"
            className="group cursor-pointer py-2.5 px-5 me-2 mb-2 text-xs font-medium  focus:outline-none rounded-lg border  focus:z-10  bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 flex items-center gap-2 transition-all duration-300"
          >
            See Demo
            <CiLocationArrow1 className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </a>
      </div>

      <Technologies project={project} />

      <KeyFeatures features={project.features} />

      <Gallery project={project} />

      <CTA project={project} />
    </div>
  );
}

const Technologies = ({ project }: { project: any }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-2 text-white/80">
        Technologies Used
      </h3>
      <div className="flex gap-2">
        {project.techIcons.map((tech: any, index: number) => (
          <TechIcon key={index} Icon={tech} />
        ))}
      </div>
    </div>
  );
};

const KeyFeatures = ({ features }: { features: any[] }) => {
  return (
    <div className="mb-12">
      <div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
        {features.map((feature, index) => (
          <KeyFeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

const KeyFeatureCard = ({ feature }: { feature: any }) => {
  return (
    <div className="relative w-full h-auto">
      <div className="bg-gradient-to-br from-gray-900/20 via-transparent to-indigo-800/20 rounded-2xl p-5  xl:p-8 h-full">
        <div className="block">
          <feature.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
          {feature.title}
        </h3>
        <p className="text-sm font-normal text-white">{feature.description}</p>
      </div>
    </div>
  );
};

const Gallery = ({ project }: { project: any }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4 text-white/80">Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {project.gallery.map((img: any, idx: number) => (
          <div key={img} className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={img}
              alt={`Project screenshot ${idx + 1}`}
              className="w-full h-40 object-cover object-center transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CTA = ({ project }: { project: any }) => {
  return (
    <div className="flex flex-col items-center mt-16">
      <a href={project.live}>
        <button
          type="button"
          className="group cursor-pointer md:py-2.5 py-2 md:px-5 px-3 md:text-xs text-[10px] font-medium  focus:outline-none rounded-lg  focus:z-10  bg-black/5 dark:bg-white/10 text-gray-300 shadow-gray-600 shadow-sm hover:text-white hover:bg-gray-700 flex items-center gap-2 transition-all duration-300"
        >
          See Live
          <CiLocationArrow1 className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </a>
      <p className="text-gray-400 mt-4 text-sm">
        Want to see the code?{" "}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-300"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};
