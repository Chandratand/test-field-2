import { getProduct } from '@/actions/product';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProductCard from '../ProductCard';

const LatestProductSection = async () => {
  const products: Product[] = await getProduct(10);

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full relative"
    >
      <CarouselContent>
        {products.map((data, index) => (
          <CarouselItem key={index} className="min-[400px]:basis-1/2 min-[550px]:basis-1/3 sm:basis-1/4 lg:basis-1/5">
            <ProductCard title={data.name} price={data.price} image={data.image} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-8 top-1/2 border-none text-slate-400 bg-transparent hover:bg-transparent" />
      <CarouselNext className="-right-8 top-1/2 border-none text-slate-400 bg-transparent hover:bg-transparent" />
    </Carousel>
  );
};

export default LatestProductSection;
