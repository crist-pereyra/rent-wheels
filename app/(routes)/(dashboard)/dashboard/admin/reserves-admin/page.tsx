import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { TableReserves } from './components/TableReserves';
import { isAdmin } from '@/lib/isAdmin';

const ReservesAdminPage = async () => {
  const { userId } = auth();
  const user = await currentUser();
  if (!userId || !user || !isAdmin(userId)) return redirect('/');
  const orders = await db.order.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>All Reserves</h1>
      <TableReserves orders={orders} />
    </div>
  );
};

export default ReservesAdminPage;
