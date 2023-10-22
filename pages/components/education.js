import { education } from '../clientData/education.json';

export default function Education() {
  const { school, degree, date, courses, url } = education;
  return (
    <div className="pb-16">
      <div className="font-bold pb-5 text-lg">Education</div>
      <div className="flex justify-between items-center pb-1">
        <div // a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-bold pr-2"
        >
          {school}
        </div>
        <div className="text-sm">{date}</div>
      </div>
      <div className="font-bold text-cyan-500 text-2xl pb-2">{degree}</div>
      <div className="flex flex-wrap">
        {courses.map((skill) => (
          <div key={skill} className="font-bold text-violet-600 pr-3">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
