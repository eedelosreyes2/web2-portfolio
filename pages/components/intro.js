import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex items-center pt-16 pb-7">
      <Image
        src="/elijahdr_ai.jpg"
        alt="elijahdr"
        className="rounded-full"
        height={100}
        width={100}
      />
      <div className="font-bold pl-5">elijah delos reyes</div>
    </div>
  );
}
