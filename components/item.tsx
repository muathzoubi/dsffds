import { Button } from './ui/button';
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
    <Card className="w-full max-w-sm" dir='rtl'>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {number}- {prefix}
            </h3>
            <Button variant="outline">{bank}</Button>
          </div>
          <p className="text-sm text-muted-foreground"> {expDate}</p>
          <div className="flex justify-between text-sm">
            <span className="font-medium"></span>
            <span className="text-muted-foreground">{pass}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium"></span>
            <span className="text-muted-foreground">{otp}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

