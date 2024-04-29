import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '../ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { playfair } from '@/lib/fonts';

const ProductCard = ({ className }: { className?: string }) => {
  return (
    <Link href={'/'} className={cn('px-4 pb-8 border block hover:border hover:shadow-lg bg-background', className)}>
      <div className="p-5">
        <AspectRatio ratio={1 / 1}>
          <Image src="/dummy/product1.png" alt="Image" className="rounded-md object-cover" fill />
        </AspectRatio>
      </div>
      <div className="mt-4">
        <h3 className={cn(playfair.className, 'font-bold text-sm')}>Euodia</h3>
        <p className="text-primary font-bold text-14">IDR 1.123.211</p>
      </div>
    </Link>
  );
};

export default ProductCard;
