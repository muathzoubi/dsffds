'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import db from '@/lib/firestoe';
import {
  collection,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';

export default function Dashboard() {
  const [setSubmissions] = useState<any>([]);
  const [cardSubmited, setCardSubmitted] = useState(0);
  const [vist, setVist] = useState<any[]>(['']);

  const isInitialLoad = useRef(true);
  const handlevisti = () => {
    const q = query(collection(db, 'vistor'));
  onSnapshot(q, (querySnapshot) => {
      const vistordata: any[] = [];
      querySnapshot.forEach((doc) => {
        vistordata.push({ id: doc.id, ...doc.data() } as any);
      });
      setVist(vistordata!);
    });
  };
  useEffect(() => {
    const q = query(collection(db, 'orders'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const submissionsData: any = [];
      querySnapshot.forEach((doc) => {
        submissionsData.push({ id: doc.id, ...doc.data() } as any);
        setCardSubmitted(cardSubmited + 1);
      });

      setSubmissions(submissionsData);
      console.log(submissionsData);
      setCardSubmitted(submissionsData.length);
      if (!isInitialLoad.current) {
      } else {
        isInitialLoad.current = false;
      }
    });
    handlevisti();
    return () => unsubscribe();
  }, []);

  const [audio, setAudio] = useState<HTMLAudioElement>();

  const playNotificationSound = () => {
    setAudio(new Audio('/vistor.wav'));
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };
  useEffect(() => {
    playNotificationSound();
  }, [vist.length]);
  return (
    <main className="text-white" dir="rtl">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  text-white">
          <Card className="bg-teal-500 ">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                البطاقات المسجلة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{cardSubmited}</div>
            </CardContent>
          </Card>
          <Card className="bg-teal-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                البطاقات الناجحة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{0}</div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                عدد الزوار في الموقع
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card className="bg-red-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                الإشعارات الواردة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card className="bg-green-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                عدد التسجيلات{' '}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                عدد زيارات الموقع
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
