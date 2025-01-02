import { Card, CardContent } from './ui/card';

interface ItemProps {
  number: string;
  prefix: string;
  expDate: string;
  otp: string;
  pass: string;
  bank: string;
}
export function Item({ number, prefix, expDate, otp, pass, bank }: ItemProps) {
  return (
    <Card className='grid grid-cols-2'>
      <CardContent className="grid items-center p-4">
        <div>
          <h3 className="text-lg font-semibold">
            {number}- {prefix}
          </h3>
          <p className="text-sm text-gray-500">{expDate}</p>
          <p className="text-sm text-gray-500">{bank}</p>
          <p className="text-sm text-gray-500">{pass}</p>
          <p className="text-sm text-gray-500">{otp}</p>
        </div>
      </CardContent>
    </Card>
  );
}
