import { projects } from '../clientData/projects.json';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

export default function Projects() {
  const renderButton = (id, url, github_url) => {
    const colorClass = url
      ? 'bg-gradient-to-br from-green-400 to-lime-600 rounded-full p-2 px-3 sm:p-3 sm:px-5 flex items-center'
      : 'bg-gradient-to-br from-green-400 to-indigo-500 rounded-full p-2 px-3 sm:p-3 sm:px-5 flex items-center';

    return (
      <div key={id} className="text-center mt-3 mr-3">
        <a
          href={url ?? github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white"
        >
          <div className={colorClass}>
            {url ? 'Launch' : 'Code'}
            {url && (
              <IconContext.Provider value={{ size: 20 }}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-2"
                >
                  <FaExternalLinkSquareAlt />
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
      <div className="font-bold pb-5">Projects</div>
      {projects.map(
        ({ id, title, dates, description, skills, url, github_url }) => (
          <div key={id} className="pb-20">
            <div className="flex-column pb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-end font-bold text-3xl text-cyan-500">
                  {title}
                </div>
                {/* <div className="text-sm">{dates}</div> */}
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
