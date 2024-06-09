import {
  type DocumentData,
  type QuerySnapshot,
  collection,
  getDocs,
} from 'firebase/firestore';
import { dataBase } from './firebase';

export interface PayStub {
  month: string;
  base_salary: number;
  overtime_pay: number;
  holiday_work: number;
  unpaid_leave: number;
  tax: number;
  net_pay: number;
}

export async function getPayStub(
  uid: string,
): Promise<
  { payStub: QuerySnapshot<DocumentData, DocumentData> } | { error: string }
> {
  const payStubRef = collection(dataBase, 'payStub', uid, 'payStubList');
  const payStubSnap = await getDocs(payStubRef);

  if (!payStubSnap) {
    return { error: '급여 내역 정정 신청 목록에 접근 실패했습니다.' };
  }

  return {
    payStub: payStubSnap || [],
  };
}
