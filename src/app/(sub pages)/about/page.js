import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import Hannah from "@/components/models/Hannah";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src="./background/about-background.png"
        width="100"
        height="100"
        priority
        sizes="100vw"
        alt="Hannah's Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <Hannah page="about" position={[0, 3, 0]} args={[7.1, 4.1]} />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-accent">
            Hannah
          </h1>
          <p className="font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl">
            Gomez Kim
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
