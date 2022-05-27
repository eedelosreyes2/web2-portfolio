import { education } from '../clientData/education.json';

export default function Education() {
  const { school, degree, date, courses, url } = education;
  return (
    <div>
      <div className="font-bold pb-5">Education</div>
      <div className="flex justify-between items-center pb-1">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-bold text-cyan-500 pr-2"
        >
          {school}
        </a>
        <div className="text-sm">{date}</div>
      </div>
      <div className="font-bold text-2xl pb-2">{degree}</div>
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
