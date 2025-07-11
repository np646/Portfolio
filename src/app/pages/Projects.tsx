import ProjectCard from "../components/ProjectCard";
import { FormattedMessage } from "react-intl";

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="flex items-center pb-8">
          <span className="font-semibold inline-block text-2xl">
            <FormattedMessage id="projects.title" />
          </span>
        </div>
        {/* To display more cards change length value */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {Array.from({ length: 6 }, (_, i) => (
            <ProjectCard key={i} value={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
