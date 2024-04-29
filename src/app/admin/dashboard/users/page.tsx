import { DataTable } from '@/components/ui/data-table';
import { User, columns } from './columns';
import AddUserDialog from './dialog/add';

const dummyUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890',
    status: 'Aktif',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '+1987654321',
    status: 'Tidak Aktif',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    phoneNumber: '+1122334455',
    status: 'Aktif',
  },
  {
    id: 4,
    name: 'Emily Brown',
    email: 'emily.brown@example.com',
    phoneNumber: '+15556667777',
    status: 'Aktif',
  },
  {
    id: 5,
    name: 'William Miller',
    email: 'william.miller@example.com',
    phoneNumber: '+14443332222',
    status: 'Tidak Aktif',
  },
  {
    id: 6,
    name: 'Olivia Wilson',
    email: 'olivia.wilson@example.com',
    phoneNumber: '+1765432109',
    status: 'Aktif',
  },
  {
    id: 7,
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    phoneNumber: '+18887776666',
    status: 'Tidak Aktif',
  },
  {
    id: 8,
    name: 'Sophia Anderson',
    email: 'sophia.anderson@example.com',
    phoneNumber: '+19999999999',
    status: 'Aktif',
  },
  {
    id: 9,
    name: 'Benjamin Martinez',
    email: 'benjamin.martinez@example.com',
    phoneNumber: '+14445556666',
    status: 'Aktif',
  },
  {
    id: 10,
    name: 'Isabella Lopez',
    email: 'isabella.lopez@example.com',
    phoneNumber: '+12222222222',
    status: 'Tidak Aktif',
  },
];

async function getData(): Promise<User[]> {
  return dummyUsers;
}
const Users = async () => {
  const data = await getData();

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
