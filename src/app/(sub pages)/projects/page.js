import Image from "next/image";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Hannah from "@/components/models/Hannah";

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src="./background/projects-background.png"
        width={100}
        height={100}
        alt="Hannah's Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:left-[1%] lg:w-1/4 h-screen w-screen">
        <RenderModel>
          <Hannah page="projects" position={[0, 2.6, 0]} args={[3.9, 2.3]} />
        </RenderModel>
      </div>
    </>
  );
}
