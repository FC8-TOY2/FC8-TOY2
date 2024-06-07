import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from './firebase';

export interface UserData {
  error: any;
  userName: string;
  dept: string;
  email: string;
  jobPosition: string;
  photoURL?: string;
}

export async function getUserData(
  userId: string,
): Promise<{ userData: UserData } | { error: string }> {
  const userDataRef = doc(dataBase, 'users', userId);
  const userDataSnap = await getDoc(userDataRef);

  if (!userDataSnap.exists()) {
    return { error: '존재하지 않는 유저입니다.' };
  }

  return {
    userData: userDataSnap.data() as UserData,
  };
}
