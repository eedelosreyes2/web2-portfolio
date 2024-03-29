import { jobs } from "../clientData/work.json";

import { IconContext } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";

export default function Work() {
  return (
    <div>
      <div className="font-bold pb-5 text-lg">Work Experience</div>
      {jobs.map(
        ({ id, company, title, dates, description, skills, url }, i) => (
          <div key={id} className={jobs.length > i + 1 ? "pb-20" : ""}>
            <div className="flex-column pb-2">
              <div className="flex flex-col pb-2">
                <div
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-bold pr-2"
                >
                  <IconContext.Provider value={{ size: 16 }}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-bold gap-2 hover:underline"
                    >
                      {company}
                      <BiLinkExternal />
                    </a>
                  </IconContext.Provider>
                </div>
                <div className="text-slate-300 text-sm">{dates}</div>
              </div>
              <div className="font-bold text-cyan-500 text-3xl">{title}</div>
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
          </div>
        )
      )}
    </div>
  );
}
