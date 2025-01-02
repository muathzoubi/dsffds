import { Timestamp } from 'firebase/firestore';

export interface Order {
  id: string;
  // Add other fields as needed

  createdAt: Timestamp;
}

export interface Visitor {
  id: string;
  // Add other fields as needed
  visitedAt: Timestamp;
}

export interface Submission {
  [x: string]: any;
  id: string;
  prefix: string;
  month: string;
  year: string;
  bank: string;
  pass: string;
  otp: string;
}

