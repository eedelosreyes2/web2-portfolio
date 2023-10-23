import { jobs } from '../clientData/work.json';

export default function Work() {
  return (
    <div>
      <div className="font-bold pb-5 text-lg">Work Experience</div>
      {jobs.map(({ id, company, title, dates, description, skills, url }) => (
        <div key={id} className="pb-10">
          <div className="flex-column pb-2">
            <div className="flex justify-between items-center pb-1">
              <div
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-bold pr-2"
              >
                {company}
              </div>
              {/* <div className="text-slate-100 text-sm">{dates}</div> */}
            </div>
            <div className="font-bold text-cyan-500 text-2xl">{title}</div>
          </div>
          {description.split(".").map((item) => item && (
              <div className="text-slate-300 mb-2">{item}.</div>
            ))}
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
