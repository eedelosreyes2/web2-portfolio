import { education } from '../clientData/education.json';

import { IconContext } from 'react-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

export default function Education() {
  const { school, degree, date, courses, url } = education;

  return (
    <div className="pb-16">
      <div className="font-bold pb-5 text-lg">Education</div>
      <div className="flex flex-col pb-2">
        <div
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
              className="flex items-center font-bold gap-1 hover:underline"
            >
            {school}
              <FaLink />
            </a>
          </IconContext.Provider>
        </div>
        <div className="text-sm text-slate-200">{date}</div>
      </div>
      <div className="font-bold text-cyan-500 text-3xl pb-2">{degree}</div>
      <div className="flex flex-wrap mb-2">
        {courses.map((skill) => (
          <div key={skill} className="font-bold text-violet-600 pr-3">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
