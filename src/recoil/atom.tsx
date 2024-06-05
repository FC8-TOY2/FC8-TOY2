import { atom } from 'recoil';

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

export const uIdState = atom<string | null>({
  key: 'uIdState',
  default: null,
});
