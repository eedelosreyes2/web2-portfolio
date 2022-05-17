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
          <div className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </div>
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
