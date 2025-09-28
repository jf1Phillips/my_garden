// import Image from "next/image";

export default function Home() {
  return (<>
    <div className="w-full bg-black flex justify-center">
      <img className="relative w-[90%]" src="/garden.png"/>
    </div>
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          /> */}
    </>);
}
