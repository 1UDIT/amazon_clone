'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const ImageBlog = [
  {
    "ix": 1,
    "img": "/img/Narzo.jpg"
  },
  {
    "ix": 2,
    "img": "/img/Ola.jpg"
  },
  {
    "ix": 3,
    "img": "/img/remote.jpg"
  },
]




export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {ImageBlog?.map((value) => (
          <CarouselItem key={value.ix}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center 2xl:h-[25rem] h-[25rem] w-full">
                <Image
                  src={value.img}
                  alt="product image"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className='h-full w-full inline-block cursor-pointer'
                  priority={true}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
