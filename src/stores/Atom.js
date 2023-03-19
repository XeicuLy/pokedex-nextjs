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

export const pokemonDataState = atom({
  key: 'pokemonDataState',
  default: [],
});

export const pokemonDetailDataState = atom({
  key: 'pokemonDetailDataState',
  default: [],
});
