import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex flex-col gap-3 pt-16 pb-5">
      <div>
        <Image
          src="/elijahdr_ai.jpg"
          alt="Elijah Delos Reyes"
          className="rounded-full"
          height={100}
          width={100}
        />
      </div>
      <div className="font-bold text-4xl">Elijah Delos Reyes</div>
      <div className="text-lg text-slate-200">
        Fullstack Engineer II at Robert Half
      </div>
      {/* <div className='text-slate-300'>I work on this this and this</div> */}
    </div>
  );
}
