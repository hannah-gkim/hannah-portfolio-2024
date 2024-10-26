import Image from "next/image";
import ContactDetails from "@/components/contact/ContactDetails";
import RenderModel from "@/components/RenderModel";
import Hannah from "@/components/models/Hannah";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        width={100}
        height={100}
        src="./background/contact-background.png"
        alt="Hannah's Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <Hannah page="contact" position={[0, 2.5, 0]} />
        </RenderModel>
      </div>
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="relative h-screen w-full flex flex-col items-center justify-center">
          <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
            <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-accent">
              Contact Me
            </h1>
            <p className="font-light xs:text-1xl sm:text-2xl lg:text-3xl">
              Get In Touch
            </p>
          </div>
        </div>
        <ContactDetails />
      </article>
      <span style={{ height: "15rem" }}> </span>
    </>
  );
}
