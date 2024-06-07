import {
  type DocumentData,
  type QuerySnapshot,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { dataBase } from './firebase';

export interface PayStubCorrection {
  [key: string]: string;
  name: string;
  dept: string;
  position: string;
  requestDate: string;
  correctDate: string;
  correctReason: string;
  correctPay: string;
  detail: string;
}

export async function addPayStubCorrection(
  data: PayStubCorrection,
  uid: string,
) {
  try {
    const payStubCorrectionsRef = collection(
      doc(dataBase, 'payStubCorrections', uid),
      'payStubCorrectionList',
    );

    await addDoc(payStubCorrectionsRef, data);

    return await Promise.resolve({ message: '정정 신청이 완료되었습니다.' });
  } catch (error) {
    return Promise.reject(new Error('정정 신청이 실패했습니다.'));
  }
}

export async function updatePayStubCorrection(
  data: PayStubCorrection,
  uid: string,
  id: string,
) {
  try {
    const payStubCorrectionsRef = doc(
      dataBase,
      'payStubCorrections',
      uid,
      'payStubCorrectionList',
      id,
    );

    await updateDoc(payStubCorrectionsRef, data);

    return await Promise.resolve({ message: '정정 신청이 수정되었습니다.' });
  } catch (error) {
    return await Promise.reject(new Error('정정 신청이 실패했습니다.'));
  }
}

export async function getPayStubCorrection(
  uid: string,
  id: string,
): Promise<{ payStubCorrection: PayStubCorrection } | { error: string }> {
  const payStubCorrectionRef = doc(
    dataBase,
    'payStubCorrections',
    uid,
    'payStubCorrectionList',
    id,
  );
  const payStubCorrectionSnap = await getDoc(payStubCorrectionRef);

  if (!payStubCorrectionSnap.exists()) {
    return { error: '급여 내역 정정 신청 목록에 접근 실패했습니다.' };
  }

  return {
    payStubCorrection: payStubCorrectionSnap.data() as PayStubCorrection,
  };
}

export async function getPayStubCorrections(
  uid: string,
): Promise<
  | { payStubCorrections: QuerySnapshot<DocumentData, DocumentData> }
  | { error: string }
> {
  const payStubCorrectionsRef = collection(
    dataBase,
    'payStubCorrections',
    uid,
    'payStubCorrectionList',
  );
  const payStubCorrectionsSnap = await getDocs(payStubCorrectionsRef);

  if (!payStubCorrectionsSnap) {
    return { error: '급여 내역 정정 신청 목록에 접근 실패했습니다.' };
  }

  return {
    payStubCorrections: payStubCorrectionsSnap || [],
  };
}
