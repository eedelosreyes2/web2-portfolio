import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex items-center pt-16 pb-5">
      <Image
        src="/elijah_dr.jpeg"
        alt="elijahdr"
        className="rounded-full"
        height={100}
        width={100}
      />
      <div className="font-bold pl-5">elijah delos reyes</div>
    </div>
  );
}
