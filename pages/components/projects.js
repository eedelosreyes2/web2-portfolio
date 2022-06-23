import { projects } from '../clientData/projects.json';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <>
      <div className="font-bold pb-5">Projects</div>
      {projects.map(
        ({ id, title, dates, description, skills, url, github_url }) => (
          <div key={id} className="pb-10">
            <div className="flex-column pb-2">
              <div className="flex justify-between items-center">
                <a // a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-end font-bold text-2xl text-cyan-500"
                >
                  {title}
                </a>
                <div className="flex items-center">
                  <IconContext.Provider
                    value={{ size: 25, className: 'text-cyan-500 mx-3' }}
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkSquareAlt />
                    </a>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: 25, className: 'text-cyan-500' }}
                  >
                    <a
                      href={github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </IconContext.Provider>
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
          </div>
        )
      )}
    </>
  );
}
