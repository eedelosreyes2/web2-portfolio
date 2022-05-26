import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex items-center py-16">
      <Image
        src="/NAC3221.gif"
        alt="elijahdr"
        className="rounded-full"
        height={100}
        width={100}
      />
      <div className="font-bold pl-5">elijah dr</div>
    </div>
  );
}
