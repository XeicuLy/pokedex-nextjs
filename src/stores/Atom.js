import { atom } from 'recoil';

export const loadingState = atom({
  key: 'loadingState',
  default: true,
});

export const nextPageState = atom({
  key: 'nextPageState',
  default: '',
});

export const prevPageState = atom({
  key: 'prevPageState',
  default: '',
});

export const nameIdState = atom({
  key: 'nameIdState',
  default: '',
});

export const imageState = atom({
  key: 'imageState',
  default: '',
});

export const typesState = atom({
  key: 'typesState',
  default: '',
});

export const heightState = atom({
  key: 'heightState',
  default: null,
});

export const weightState = atom({
  key: 'weightState',
  default: null,
});

export const indexState = atom({
  key: 'indexState',
  default: null,
});

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const genusState = atom({
  key: 'genusState',
  default: '',
});
