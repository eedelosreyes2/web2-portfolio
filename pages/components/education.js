import { education } from "../clientData/education.json";

import { IconContext } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";

export default function Education() {
  const { school, degree, date, courses, url } = education;

  // TODO
  return (
    <div>
      <div className="font-bold pb-5 text-lg">Education</div>
      <div className="flex flex-col pb-2">
        <div
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
              {school}
              <BiLinkExternal />
            </a>
          </IconContext.Provider>
        </div>
        {/* <div className="text-sm text-slate-300">{date}</div> */}
      </div>
      <div className="font-bold text-cyan-500 text-3xl pb-2">{degree}</div>
      {/* <div className="flex flex-wrap">
        {courses.map((skill) => (
          <div key={skill} className="font-bold text-violet-600 pr-3">
            {skill}
          </div>
        ))}
      </div> */}
    </div>
  );
}
