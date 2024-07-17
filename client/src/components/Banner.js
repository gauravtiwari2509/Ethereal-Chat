"use client";
import { HeroHighlight, Highlight } from "./ui/Banner.jsx";
import Superchat from "./Superchat.js";
export function Banner() {
  return (
    <>
      <HeroHighlight>
      </HeroHighlight>
      <div className=" w-screen  flex flex-col justify-center items-center pt-[10vh] gap-[10vh]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"  >
          <Highlight className="text-black dark:text-white ">
            EtherealGift
          </Highlight>
        </h1>
        <Superchat/>
      </div>
    </>
  );
}
