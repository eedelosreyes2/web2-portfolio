import { projects } from "../clientData/projects.json";
import { SlArrowDown } from "react-icons/sl";
import { IconContext } from "react-icons";

export default function Projects() {
  const renderProject = (project) => {
    const { id, title, dates, description, skills, url, github_url, image } = project;
    return (
      <div className="flex justify-between items-center gap-4 pb-16 cursor-pointer">
        {/* {image && <img src={image} className="rounded-xl"/>} */}
        <div className="text-xl md:text-3xl">{title}</div>
        <div>
          <IconContext.Provider value={{ size: 24 }}>
            <SlArrowDown />
          </IconContext.Provider>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="font-bold pb-16 text-lg">Projects</div>
      {projects.map(
        (project, i) => (
          renderProject(project)
        )
      )}
    </>
  );
}
