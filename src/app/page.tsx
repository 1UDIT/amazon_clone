import { CarouselPlugin } from "@/components/CarouselPlugin";
import Index from "@/components/CategoryPage/Index";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#e3e6e6]">
      <div className=" lg:w-full 2xl:w-[90%]  2xl:mx-[5%]  bg-red-500  relative">
        <div className=" h-[30%]  w-full p-5">
          <CarouselPlugin />
        </div>
        <div className=" h-[70%] lg:w-full 2xl:w-[90%]  2xl:mx-[5%] w-full bg-green-500 p-6 relative -top-[95px]">
          <Index />
        </div>
      </div>
    </main>
  );
}
