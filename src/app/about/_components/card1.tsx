import React from "react";
import { Cover } from "@/ui/components/ui/cover";
import { StickyScroll } from "@/ui/components/ui/sticky-scroll-reveal";

export function Card1Title() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 pt-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Post Amazing Stories <br /> At <Cover>Warp Speed</Cover>
      </h1>
    </div>
  );
}
const content = [
 {
  title: "Post Amazing Stories",
  description:
   "Collaborate seamlessly with your team in real time and enhance your storytelling workflow.",
 },
 {
  title: "Real-Time Updates",
  description:
   "Monitor every change instantly and simplify version control for a smoother experience.",
 },
 {
  title: "Intuitive UI/UX Dashboard",
  description:
   "Work effortlessly with a modern dashboard that keeps your team aligned and productive.",
 },
 {
  title: "Integrated Real-Time Messenger",
  description:
   "Stay connected and maintain uninterrupted communication to boost your workflow.",
 },
];

export function Card1Description(){
 return(
  <div className="w-full h-fit relative bottom-5">
      <StickyScroll content={content} />
  </div>
 )
}
