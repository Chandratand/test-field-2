import { DataTable } from '@/components/ui/data-table';
import { User, columns } from './columns';
import AddUserDialog from './dialog/add';
import { getUser } from '@/actions/user';

const Users = async () => {
  const data: User[] = await getUser();

  return (
    <section className="py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-lg">Manajemen User</h1>
        <AddUserDialog />
      </div>

      <div className="mt-6">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default Users;
