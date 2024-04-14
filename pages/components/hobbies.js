import { hobbies } from "../clientData/hobbies.json";

export default function Hobbies() {
  return (
    <>
      <div className="font-bold pb-5 text-lg">Hobbies</div>
      <div className="flex flex-wrap">
        {hobbies.map((hobby, i) => (
          <div key={i} className="font-bold text-violet-600 pr-2">
            {hobby}
          </div>
        ))}
      </div>
    </>
  );
}
