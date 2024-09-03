import { CarouselPlugin } from "@/components/CarouselPlugin";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="2xl:h-[30rem] h-[20rem] w-full  bg-black">
        <CarouselPlugin />
      </div>
      <div className="grid grid-cols-3 bg-black text-white 2xl:h-[30rem] h-[20rem]">
        <div>s</div>
        <span></span>
        <span></span>
      </div>
    </main>
  );
}
