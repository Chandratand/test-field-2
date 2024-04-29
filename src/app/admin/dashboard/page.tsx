import SummaryCard from '@/components/SummaryCard';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';

const DashboardPage = () => {
  const summaryData = [
    {
      title: 'Jumlah User',
      count: 150,
      unit: 'User',
    },
    {
      title: 'Jumlah User Aktif',
      count: 150,
      unit: 'User',
    },
    {
      title: 'Jumlah Produk',
      count: 150,
      unit: 'Produk',
    },
    {
      title: 'Jumlah Produk Aktif',
      count: 150,
      unit: 'Produk',
    },
  ];

  const latestProduct = [
    {
      product: 'Microsoft Surface 7',
      createdAt: '12 Mei 2023',
      price: '1000',
    },
    {
      product: 'Microsoft Surface 7',
      createdAt: '12 Mei 2023',
      price: '1000',
    },
    {
      product: 'Microsoft Surface 7',
      createdAt: '12 Mei 2023',
      price: '1000',
    },
  ];

  return (
    <section>
      <h1 className="pt-[30px] pb-8 text-lg">Dashboard</h1>
      <div className="flex flex-wrap gap-4">
        {summaryData.map((data, index) => (
          <SummaryCard {...data} key={index} />
        ))}
      </div>
      <div className="my-8 px-[30px] pt-[22px] pb-[45px] bg-background rounded-xl max-w-[784px]">
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
                        <Image src={'/dummy/product3.png'} fill alt={p.product + ' name'} />
                      </AspectRatio>
                    </div>
                    {p.product}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{p.createdAt}</TableCell>
                  <TableCell>Rp {p.price}</TableCell>
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
