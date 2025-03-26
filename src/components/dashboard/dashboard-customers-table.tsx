import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export const DashboardCustomersTable = () => {
  return (
    <Table>
      <TableCaption>Uma lista de clientes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Status</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className='text-right'>Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium'>Pago</TableCell>
          <TableCell>email@email.com</TableCell>
          <TableCell className='text-right'>$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
