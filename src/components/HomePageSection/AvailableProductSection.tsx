import { cn } from "@/lib/utils";
import ProductCard from "../ProductCard";
import { Button } from "../ui/button";
import { playfair } from "@/lib/fonts";

const AvailableProductSection = () => {
  return (
    <section className="py-14">
      <h2 className={cn(playfair.className, "font-bold text-xl mb-8")}>Produk Tersedia</h2>
      <div className="flex flex-wrap -ml-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="basis-full min-[400px]:basis-1/2 min-[550px]:basis-1/3 sm:basis-1/4 lg:basis-1/5 pl-4 mb-4">
            <ProductCard />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center items-center">
        <Button className="capitalize font-semibold" variant={"outline"}>
          Lihat Lebih Banyak
        </Button>
      </div>
    </section>
  );
};

export default AvailableProductSection;
