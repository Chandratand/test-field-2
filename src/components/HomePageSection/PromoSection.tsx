'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';

const PromoSection = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-4 md:py-8">
      <Carousel setApi={setApi} plugins={[plugin.current]} className="w-full" onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex justify-center items-center w-full">
                  <AspectRatio ratio={3 / 1}>
                    <Image fill src={'/dummy/promo-1.png'} alt={'promo' + index} />
                  </AspectRatio>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex gap-2 md:gap-[10px] items-center mt-1 md:mt-4 justify-center md:justify-start">
          <CarouselPrevious className="relative border-none text-slate-400" />
          {Array.from({ length: count }).map((item, i) => (
            <div
              role="button"
              key={i}
              className={cn('size-[9px] rounded-full bg-secondary', {
                'bg-slate-400': i === current - 1,
              })}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
          <CarouselNext className="relative border-none text-slate-400" />
        </div>
      </Carousel>
    </section>
  );
};

export default PromoSection;
