import { projects } from '../clientData/projects.json';

export default function Projects() {
  return (
    <div>
      <div className="font-bold pb-5">Web2 Projects</div>
      {projects.map(({ id, title, dates, description, skills, url }) => (
        <div key={id} className="pb-10">
          <div className="flex-column pb-2">
            <div className="flex justify-between items-end">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-2xl text-cyan-500"
              >
                {title}
              </a>
            </div>
          </div>
          <div className="mb-2">{description}</div>
          <div className="flex flex-wrap">
            {skills.map((skill) => (
              <div
                key={skill}
                className="font-bold text-violet-600 text-sm pr-3"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
