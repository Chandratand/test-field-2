import { DataTable } from '@/components/ui/data-table';
import { Product, columns } from './columns';
import AddProductDialog from './dialog/add';
import { getProduct } from '@/actions/product';

const ProductPage = async () => {
  const data: Product[] = await getProduct();

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
