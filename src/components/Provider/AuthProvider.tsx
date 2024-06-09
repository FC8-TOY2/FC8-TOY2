'use client';

import { ReactNode, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/db/firebase';
import { uIdState } from '@/recoil/atom';

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const setUId = useSetRecoilState(uIdState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUId(user.uid);
      } else {
        setUId('');
      }
    });

    return () => unsubscribe();
  }, [setUId]);

  return <>{children}</>;
}

export default AuthProvider;
