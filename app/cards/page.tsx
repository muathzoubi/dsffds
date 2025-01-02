'use client';

import { useEffect, useRef, useState } from 'react';
import {
  collection,
  query,
  onSnapshot,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

import db from '@/lib/firestoe';
import { ListItems } from '@/components/Subimt';



export default function SubmissionsList() {
  const [submissions,setSubmtions] = useState<any[]>(['']);
  const [vist, setVist] = useState<any[]>([]);
  const [item, setItem] = useState(0);
  const isInitialLoad = useRef(true);

  async function getDataFromFirestore() {
    const arr: QueryDocumentSnapshot<DocumentData, DocumentData>[] = [];
    const querySnapshot = await getDocs(collection(db, 'vistor'));
    querySnapshot.docs.map((doc) => arr.push(doc));
    return arr;
  }

  useEffect(() => {
    const q = query(collection(db, 'orders'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const submissionsData: any = [];
      querySnapshot.forEach(async (doc) => {
        console.log(doc.data());
        await submissionsData.push(doc);
        setSubmtions(submissionsData)
        console.log(submissionsData);
        console.log(submissions);
      });

      getDataFromFirestore().then((t) => {
        setVist(t);
        console.log(t);
      });
      if (!isInitialLoad.current) {
      } else {
        isInitialLoad.current = false;
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    playNotificationSound2();
  }, [vist.length]);

  useEffect(() => {
    playNotificationSound();
  }, [submissions.length]);

  const [audio, setAudio] = useState<HTMLAudioElement>();
  const playNotificationSound2 = () => {
    setAudio(new Audio('/vistor.wav'));
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };

  const playNotificationSound = () => {
    setAudio(new Audio('/notification.wav'));
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };
  return (
    <div className='flex '>
    <ListItems submissions={submissions}  />;
    </div>
  )
}
