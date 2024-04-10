import { skills } from '../clientData/skills.json';

export default function Skills() {
  return (
    <>
      <div className="font-bold pb-16 text-lg">Tech Stack</div>
      <div className="flex flex-wrap">
        {skills.map((skill, i) => (
          <div key={i} className="font-bold text-violet-600 pr-2">
            {skill}
          </div>
        ))}
      </div>
    </>
  );
}
