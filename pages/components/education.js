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
          className="flex items-center pr-2"
        >
          {school}
        </div>
      </div>
      <div className="text-cyan-500 text-3xl pb-2">{degree}</div>
    </div>
  );
}
