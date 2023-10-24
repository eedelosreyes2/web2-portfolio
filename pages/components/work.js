import { jobs } from '../clientData/work.json';

import { IconContext } from 'react-icons';
import { FaLink } from 'react-icons/fa';

export default function Work() {
  return (
    <div>
      <div className="font-bold pb-5 text-lg">Work Experience</div>
      {jobs.map(({ id, company, title, dates, description, skills, url }) => (
        <div key={id} className="pb-20">
          <div className="flex-column pb-2">
            <div className="flex flex-col pb-2">
              <div
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-bold pr-2"
              >
                <IconContext.Provider value={{ size: 12 }}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-bold gap-2 hover:underline"
                  >
                      {company}
                    <FaLink />
                  </a>
              </IconContext.Provider>
            </div>
            <div className="text-slate-300 text-sm">{dates}</div>
            </div>
            <div className="font-bold text-cyan-500 text-3xl">{title}</div>
          </div>
          {description.split(".").map((item) => item && (
              <div className="text-slate-300 mb-2">{item}.</div>
            ))}
          <div className="flex flex-wrap mb-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="font-bold text-violet-600 pr-3"
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
