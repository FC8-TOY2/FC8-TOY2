import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
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

export async function addPayStubCorrection(data: PayStubCorrection) {
  try {
    const userId = 'hha8HhDxIDxf3hX7QulJ';
    const payStubCorrectionsRef = collection(
      doc(dataBase, 'payStubCorrections', userId),
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
  id: string,
) {
  // const auth = getAuth();

  // onAuthStateChanged(auth, async (user) => {
  //   if (!user) return { message: '유저를 찾을 수 없습니다.' };

  //   const userId = user.uid;
  //   const payStubCorrectionsRef = doc(
  //     dataBase,
  //     'payStubCorrections',
  //     userId,
  //     'payStubCorrectionList',
  //     id,
  //   );
  //   const payStubCorrectionsSnap = await getDoc(payStubCorrectionsRef);

  //   if (!payStubCorrectionsSnap)
  //     return { error: '급여 내역 정정 신청 목록에 접근에 실패했습니다.' };
  // });

  try {
    const userId = 'hha8HhDxIDxf3hX7QulJ';
    const payStubCorrectionsRef = doc(
      dataBase,
      'payStubCorrections',
      userId,
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
  id: string,
): Promise<{ payStubCorrection?: PayStubCorrection; error?: string }> {
  const userId = 'hha8HhDxIDxf3hX7QulJ';
  const payStubCorrectionsRef = doc(
    dataBase,
    'payStubCorrections',
    userId,
    'payStubCorrectionList',
    id,
  );
  const payStubCorrectionsSnap = await getDoc(payStubCorrectionsRef);

  if (!payStubCorrectionsSnap.exists()) {
    return { error: '급여 내역 정정 신청 목록에 접근에 실패했습니다.' };
  }

  return {
    payStubCorrection: payStubCorrectionsSnap.data() as PayStubCorrection,
  };
}
