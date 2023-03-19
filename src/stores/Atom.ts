import { atom } from 'recoil';

export const loadingState = atom({
  key: 'loadingState',
  default: true,
});

export const nextURLState = atom({
  key: 'nextURLState',
  default: '',
});

export const prevURLState = atom({
  key: 'prevURLState',
  default: '',
});
