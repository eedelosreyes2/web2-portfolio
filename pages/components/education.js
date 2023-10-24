import { education } from '../clientData/education.json';

import { IconContext } from 'react-icons';
import { IoSchool } from 'react-icons/io5';

export default function Education() {
  const { school, degree, date, courses, url } = education;
  const renderButton = (id, url) => {
    return (
      <div key={id} className="text-center mt-3 mr-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white"
        >
          <div className='bg-gradient-to-br from-yellow-500 to-green-600 rounded-full p-2 px-4 flex items-center'>
            USF
              <IconContext.Provider value={{ size: 20 }}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-2"
                >
                  <IoSchool />
                </a>
              </IconContext.Provider>
          </div>
        </a>
      </div>
    );
  };

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
          {school}
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
      <div className="flex justify-start flex-wrap">
        {renderButton(0, url)}
      </div>
    </div>
  );
}
