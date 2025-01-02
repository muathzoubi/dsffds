'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

import db from '@/lib/firestoe';
import { ListItems } from '@/components/Subimt';
import { Order, Submission, Visitor } from '@/app/types/firestore';

export default function SubmissionsList() {
  const [orders, setOrders] = useState<Submission[]>([]);
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  useEffect(() => {
    const ordersQuery = query(collection(db, 'orders'));
    const visitorsQuery = query(collection(db, 'vistor'));

    const unsubscribeOrders = onSnapshot(ordersQuery, (snapshot) => {
      const newOrders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as Submission));
      setOrders(newOrders);
      playNotificationSound('/notification.wav');
    });

    const unsubscribeVisitors = onSnapshot(visitorsQuery, (snapshot) => {
      const newVisitors = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as Visitor));
      setVisitors(newVisitors);
      playNotificationSound('/vistor.wav');
    });

    return () => {
      unsubscribeOrders();
      unsubscribeVisitors();
    };
  }, []);

  const playNotificationSound = (soundFile: string) => {
    const audio = new Audio(soundFile);
    audio.play().catch((error) => {
      console.error('Failed to play sound:', error);
    });
  };

  return (
    <div className='flex'>
      <ListItems submissions={orders}  />
      {/* You can add a component to display visitors here if needed */}
    </div>
  );
}

