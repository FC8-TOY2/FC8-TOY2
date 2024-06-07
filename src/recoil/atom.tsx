import { UserData } from '@/db/user';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'user',
});

export const userNameState = atom<string>({
  key: 'userName',
  default: '',
});

export const jobPositionState = atom<string>({
  key: 'jobPosition',
  default: '',
});

export const deptState = atom<string>({
  key: 'dept',
  default: '',
});

export const profilePhotoState = atom<string | null>({
  key: 'profilePhoto',
  default: '',
});

export const uIdState = atom<string>({
  key: 'uIdState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const userDataState = atom<UserData | null>({
  key: 'userDataState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
