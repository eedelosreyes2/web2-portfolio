import { jobs } from '../clientData/work.json';

import { IconContext } from 'react-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

export default function Work() {
  const renderButton = (id, company, url) => {
    let containerClass = "rounded-full p-2 px-4 flex items-center "
    
    switch (company) {
      case "Robert Half":
        containerClass += "bg-gradient-to-br from-red-600 to-red-900"
        break;
      case "Boonoob":
        containerClass += "bg-gradient-to-br from-indigo-600 to-indigo-500"
        break;
      case "Fanmire":
        containerClass += "bg-gradient-to-br from-red-600 to-orange-600"
        break;
      case "Thinq.tv":
        containerClass += "bg-gradient-to-br from-pink-900 to-pink-600"
        break;
    
      default:
        break;
    }

    return (
      <div key={id} className="text-center mt-3 mr-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white"
        >
          <div className={containerClass}>
            {company}
              <IconContext.Provider value={{ size: 16 }}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-2"
                >
                  <FaExternalLinkAlt />
                </a>
              </IconContext.Provider>
          </div>
        </a>
      </div>
    );
  };

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
                  className="flex items-center font-bold gap-1"
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
          {/* <div className="flex justify-start flex-wrap">
            {renderButton(id, company, url)}
          </div> */}
        </div>
      ))}
    </div>
  );
}
