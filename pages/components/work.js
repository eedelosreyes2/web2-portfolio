import { jobs } from '../clientData/work.json';

export default function Work() {
  return (
    <div>
      <div className="font-bold pb-5">Work Experience</div>
      {jobs.map(({ id, company, title, dates, description, skills, url }) => (
        <div key={id} className="pb-10">
          <div className="flex-column pb-2">
            <div className="flex justify-between items-center pb-1">
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline flex items-center font-bold text-cyan-500 pr-2"
              >
                {company}
              </a>
              <div className="text-sm">{dates}</div>
            </div>
            <div className="font-bold text-2xl">{title}</div>
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
