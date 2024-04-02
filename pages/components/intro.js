import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex flex-col gap-3 pb-5">
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
      <div className="text-2xl font-bold text-cyan-500">
        {/* Fullstack Engineer <span className="font-bold text-center font-bold from-cyan-500 to-violet-600 bg-gradient-to-r bg-clip-text text-transparent">open to work</span> */}
        Fullstack Engineer
      </div>
      <div className="text-slate-300">
        I enjoy crafting web applications displaying intuitive, user-friendly,
        and functional interfaces with attention to detail.
      </div>
    </div>
  );
}
