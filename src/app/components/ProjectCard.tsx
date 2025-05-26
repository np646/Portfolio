import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { projects } from "../components/ProjectList";

interface ProjectCardProps {
  value: number;
}

export default function ProjectCard({ value }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div id="project-card">
      {/* Card */}
      <div className="rounded overflow-hidden shadow-lg flex flex-col bg-neutral-900 border border-neutral-800 ">
        <div className="relative">
          <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <Image
              className="w-full"
              src={projects.find((p) => p.id === value)?.image || ""}
              alt="Personal project image"
              width={1024}
              height={683}
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-zinc-900 opacity-25"></div>
          </div>
          <a href={projects.find((p) => p.id === value)?.url} target="_blank" rel="noopener noreferrer">
            <div className="text-xs absolute top-0 right-0 px-4 py-2 mt-3 mr-3  hover:text-pink-400 transition duration-500 ease-in-out">
              <GitHubIcon />
            </div>
          </a>
        </div>
        <div className="px-6 py-4 mb-auto h-45">
          <span className="font-medium text-lg inline-block mb-2">
            <FormattedMessage id={`project${value}.title`} />
          </span>
          <p className="text-gray-400 text-sm">
            <FormattedMessage id={`project${value}.description`} />
          </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-start border-t-1 border-neutral-800">
          {projects
            .find((p) => p.id === value)
            ?.stack.map((stackItem, i) => (
              <span key={i} className="bg-pink-500/10 text-pink-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                {stackItem}
              </span>
            ))}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setIsModalOpen(false)} // closes modal when clicking outside of it
        >
          <div
            className="relative p-4 w-full max-w-2xl max-h-full"
            onClick={(e) => e.stopPropagation()} // prevent modal closing on image click
          >
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              {/* Image */}
              <div className="relative">
                <div>
                  <Image
                    className="w-full"
                    src={projects.find((p) => p.id === value)?.image || ""}
                    alt="Personal project image"
                    width={1024}
                    height={683}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
