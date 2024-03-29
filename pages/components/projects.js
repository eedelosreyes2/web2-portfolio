import { projects, web3Projects } from "../clientData/projects.json";
import Divider from "./divider";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

export default function Projects() {
  const renderButton = (id, url, github_url) => {
    if (!url && !github_url) return;

    const colorClass = url
      ? "bg-gradient-to-br from-green-400 to-lime-600 rounded-full p-2 px-4 flex items-center"
      : "bg-gradient-to-br from-green-400 to-indigo-500 rounded-full p-2 px-4 flex items-center";

    return (
      <div key={id} className="text-center mt-5 mr-3">
        <a
          href={url ?? github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white"
        >
          <div className={colorClass}>
            {url ? "Live Demo" : "Code"}
            {url && (
              <IconContext.Provider value={{ size: 15 }}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-2"
                >
                  <FaPlay />
                </a>
              </IconContext.Provider>
            )}
            {github_url && (
              <IconContext.Provider value={{ size: 20 }}>
                <a
                  href={github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-2"
                >
                  <FaGithub />
                </a>
              </IconContext.Provider>
            )}
          </div>
        </a>
      </div>
    );
  };

  return (
    <>
      <div className="font-bold pb-5 text-lg">Projects</div>
      {projects.map(
        ({ id, title, dates, description, skills, url, github_url }, i) => (
          <div key={id} className={projects.length > i + 1 ? "pb-20" : ""}>
            <div className="flex-column pb-2">
              <div className="flex flex-col">
                <div className="text-sm text-slate-300 pb-2">{dates}</div>
                <div className="flex items-end font-bold text-3xl text-cyan-500">
                  {title}
                </div>
              </div>
            </div>
            {description
              .split(".")
              .map(
                (item) =>
                  item && <div className="text-slate-200 mb-2">{item}.</div>
              )}
            <div className="flex flex-wrap">
              {skills.map((skill) => (
                <div key={skill} className="font-bold text-violet-600 pr-3">
                  {skill}
                </div>
              ))}
            </div>
            <div className="flex justify-start flex-wrap">
              {renderButton(id, url, null)}
              {renderButton(id, null, github_url)}
            </div>
          </div>
        )
      )}

      <Divider />
      <div className="font-bold pb-5 text-lg">Web3 Projects</div>
      {web3Projects.map(
        ({ id, title, dates, description, skills, url, github_url }, i) => (
          <div key={id} className={web3Projects.length > i + 1 ? "pb-20" : ""}>
            <div className="flex-column pb-2">
              <div className="flex flex-col">
                <div className="text-sm text-slate-300 pb-2">{dates}</div>
                <div className="flex items-end font-bold text-3xl text-cyan-500">
                  {title}
                </div>
              </div>
            </div>
            <div className="text-slate-200 mb-2">{description}</div>
            <div className="flex flex-wrap">
              {skills.map((skill) => (
                <div key={skill} className="font-bold text-violet-600 pr-3">
                  {skill}
                </div>
              ))}
            </div>
            <div className="flex justify-start flex-wrap">
              {renderButton(id, url, null)}
              {renderButton(id, null, github_url)}
            </div>
          </div>
        )
      )}
    </>
  );
}
