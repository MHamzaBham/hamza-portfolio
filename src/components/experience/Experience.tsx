import React from "react";
import { ArrowDown } from "lucide-react"; // Replace with the correct import for your `ArrowDown` icon



type Experience = {
    name: string;
    role: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type ExperienceProps = {
    experience: Experience;
    index: number;
    experienceLength: number;
};

const Experience: React.FC<ExperienceProps> = ({ experience, index, experienceLength }) => {
    return (
        <div key={experience.name} className="relative flex flex-col items-center">
            {/* Feature Block */}
            <div className={`relative pl-16 ${index % 2 !== 0 ? "md:mt-20" : "md:-mt-20"}`}>
                <dt className="text-base/7 font-semibold text-gray-100">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                        <experience.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    <h2 className="text-lg font-[poppins]">{experience.role}</h2>
                    <h4 className="text-xs font-[poppins] text-gray-500 font-extralight tracking-tight">
                        MAR 2022 - OCT 2022
                    </h4>
                </dt>
                <p className="text-gray-400 text-md mt-3">{experience.description}</p>
            </div>

            {/* Transition Arrow */}
            {index < experienceLength - 1 && (
                <div
                    className={`hidden md:flex w-full ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                >
                    <ArrowDown
                        className={`size-6 text-indigo-400 animate-bounce ${
                            index % 2 === 0 ? "rotate-135" : "-rotate-135"
                        }`}
                    />
                </div>
            )}
        </div>
    );
};

export default Experience;
