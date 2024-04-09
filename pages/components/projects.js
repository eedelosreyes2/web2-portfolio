import { projects } from "../clientData/projects.json";

export default function Projects() {
  const renderProject = (project) => {
    const { id, title, dates, description, skills, url, github_url, image } = project;
    return (
      <div className="flex flex-col gap-4 pb-16">
        {image && <img src={image} className="rounded-xl"/>}
        <div className="">{title}</div>
      </div>
    )

  }

  return (
    <>
      <div className="font-bold pb-5 text-lg">Projects</div>
      {projects.map(
        (project, i) => (
          renderProject(project)
        )
      )}
    </>
  );
}
