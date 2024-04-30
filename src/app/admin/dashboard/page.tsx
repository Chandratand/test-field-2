import { getProduct } from '@/actions/product';
import SummaryCard from '@/components/SummaryCard';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { db } from '@/db';
import { formatNumber } from '@/lib/formatter/numberFormatter';
import { format } from 'date-fns';
import Image from 'next/image';

const getUserSummary = async () => {
  const totalUsers = await db.user.count();
  const activeUsers = await db.user.count({ where: { status: 'Aktif' } });

  return [
    { title: 'Jumlah User', count: totalUsers, unit: 'User' },
    { title: 'Jumlah User Aktif', count: activeUsers, unit: 'User' },
  ];
};

const getProductSummary = async () => {
  const totalProducts = await db.product.count();
  const activeProducts = await db.product.count({ where: { status: 'Aktif' } });

  return [
    { title: 'Jumlah Produk', count: totalProducts, unit: 'Produk' },
    { title: 'Jumlah Produk Aktif', count: activeProducts, unit: 'Produk' },
  ];
};

const getSummaryData = async () => {
  const userData = await getUserSummary();
  const productData = await getProductSummary();

  return [...userData, ...productData];
};

const DashboardPage = async () => {
  const summaryData = await getSummaryData();

  const latestProduct = await getProduct(10);

  return (
    <section className="py-8">
      <h1 className="text-lg">Dashboard</h1>
      <div className="flex flex-wrap gap-4">
        {summaryData.map((data, index) => (
          <SummaryCard {...data} key={index} />
        ))}
      </div>
      <div className="mt-8 px-[30px] pt-[22px] pb-[45px] bg-background rounded-xl max-w-[784px]">
        <h2 className="font-medium mb-5">Produk Terbaru</h2>
        <div>
          <Table className="border-collapse">
            <TableHeader className="bg-primary">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-primary-foreground rounded-l-md">Produk</TableHead>
                <TableHead className="text-primary-foreground">Tanggal Dibuat</TableHead>
                <TableHead className="text-primary-foreground rounded-r-md">Harga (Rp)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {latestProduct.map((p, i) => (
                <TableRow key={i} className="border-b-0">
                  <TableCell className="flex items-center gap-5">
                    <div className="size-10">
                      <AspectRatio ratio={1 / 1}>
                        <Image src={'/dummy/product3.png'} fill alt={p.name + ' name'} />
                      </AspectRatio>
                    </div>
                    {p.name}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{format(new Date(p.createdAt), 'dd MMMM yyyy')}</TableCell>
                  <TableCell>Rp {formatNumber(p.price)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
