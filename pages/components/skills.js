import Image from 'next/image';
import { skills } from '../clientData/skills.json';

export default function Skills() {
  return (
    <>
      <div className="font-bold pb-16 text-lg">Technical Skills</div>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {skills.map((skill, i) => {
          let { id, name, image } = skill;
          return (
            <div key={id}>
              <button data-tooltip-target={name} type='button'>
                <Image src={image} height={54} width={54} alt={name}></Image>
              </button>
              <div id={name} role="tooltip" className="absolute z-10 invisible inline-block 
                px-3 py-2 text-sm transition-opacity duration-300 rounded-lg shadow-sm 
                opacity-0 tooltip bg-gray-700 font-bold">
                {name}
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}