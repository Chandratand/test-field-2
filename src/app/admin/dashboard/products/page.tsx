import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Product, columns } from './columns';
import AddProductDialog from './dialog/add';

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 1999,
    image: '/dummy/product3.png',
    status: 'Aktif',
    createdAt: '2024-04-29T08:00:00Z',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 2999,
    image: '/dummy/product3.png',
    status: 'Tidak Aktif',
    createdAt: '2024-04-29T09:00:00Z',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 3999,
    image: '/dummy/product3.png',
    status: 'Aktif',
    createdAt: '2025-04-29T10:00:00Z',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 4999,
    image: '/dummy/product3.png',
    status: 'Tidak Aktif',
    createdAt: '2024-04-29T11:00:00Z',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 5999,
    image: '/dummy/product3.png',
    status: 'Aktif',
    createdAt: '2024-04-29T12:00:00Z',
  },
];

async function getData(): Promise<Product[]> {
  return products;
}
const ProductPage = async () => {
  const data = await getData();

  return (
    <section className="py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-lg">Manajemen Produk</h1>
        <AddProductDialog />
      </div>

      <div className="mt-6">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default ProductPage;
