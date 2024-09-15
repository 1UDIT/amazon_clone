import { CarouselPlugin } from "@/components/CarouselPlugin";
import Index from "@/components/CategoryPage/Index";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#e3e6e6]">
      <div className=" lg:w-full 2xl:w-[90%]  2xl:mx-[5%]  relative">
        <div className=" h-[30%]  w-full 2xl:p-5 lg:p-0">
          <CarouselPlugin />
        </div>
        <div className=" h-[70%] lg:w-full 2xl:w-[90%]  2xl:mx-[5%] w-full p-6 relative -top-[95px]">
          <Index />
        </div>
      </div>
    </main>
  );
}
