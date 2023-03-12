import axios from 'axios';
import { BASE_URL } from '@/const/const';

export const getAllPokemons = async () => {
  // ポケモンの全データ取得
  const res = await axios.get(BASE_URL).catch(() => {
    return <h1>エラーが発生しました。</h1>;
  });
  const results = res.data.results;
  const dataPromise = [];
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    dataPromise.push(getPokemon(result.name));
  }
  return await Promise.all(dataPromise);
};

export const getPokemon = async id => {
  // ポケモンの基本データ取得
  const basicData = await axios.get(BASE_URL + id);
  // ポケモンの詳細データ取得
  const detailData = await axios.get(basicData.data.species.url);
  // console.log(detailData);

  await console.log(detailData);

  const nameId = basicData.data.name;
  const image = basicData.data.sprites.other['official-artwork']['front_default'];
  const types = basicData.data.types;
  const height = basicData.data.height;
  const weight = basicData.data.weight;
  const index = detailData.data.pokedex_numbers[0]['entry_number'];
  const name = detailData.data.names[0].name;
  const genus = detailData.data.genera[0].genus;
};
