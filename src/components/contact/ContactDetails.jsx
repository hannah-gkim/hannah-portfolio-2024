"use client";
import React from "react";
import ItemLayout from "../ItemLayout";
import { Linkedin, Mail } from "lucide-react";

export default function ContactDetails() {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/hannah-gkim/", "_blank");
  };
  return (
    <>
      <ItemLayout className={"sm:p-5 width-20"}>
        <div
          className="flex flex-row w-full cursor-pointer"
          onClick={() => {
            window.location.href = "mailto:hannahgomezkim@gmail.com";
          }}
        >
          <Mail className="w-[.9rem] h-auto mr-3" strokeWidth={1.5} />
          <p className="font-semibold text-accent ">hannahgomezkim@gmail.com</p>
        </div>
      </ItemLayout>
      <ItemLayout className={"sm:p-5 width-20"}>
        <div className="flex flex-row w-full">
          <Linkedin className="w-[.9rem] h-auto mr-3" strokeWidth={1.5} />
          <p className="font-semibold text-accent" onClick={openLinkedIn}>
            LinkedIn
          </p>
        </div>
      </ItemLayout>
    </>
  );
}
