import Image from "next/image";
import Navigation from "@/components/navigation";
import RenderModel from "@/components/RenderModel";
import Hannah from "@/components/models/Hannah";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src="./background/home-background.png"
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Hannah page="home" position={[0, 1.5, 0]} />
        </RenderModel>
      </div>
    </main>
  );
}
