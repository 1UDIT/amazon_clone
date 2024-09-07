import { CarouselPlugin } from "@/components/CarouselPlugin";
import Index from "@/components/CategoryPage/Index";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#e3e6e6]">
      <div className=" lg:w-full lg:m-0  bg-red-500  relative">
        <div className=" h-[30%]  w-full p-5">
          <CarouselPlugin />
        </div>
        <div className=" h-[70%] lg:w-full  bg-green-500 flex justify-center   p-6 relative -top-[95px]">
          <Index />
        </div>
      </div>
    </main>
  );
}
