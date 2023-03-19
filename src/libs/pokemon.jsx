import axios from 'axios';

export const getAllPokemon = async url => {
  const res = await axios.get(url);
  return res.data;
};

export const getPokemon = async url => {
  // 基本データ
  const basicData = await axios.get(url);
  // ポケモンの詳細データ取得
  const detailData = await axios.get(basicData.data.species.url);

  const nameId = basicData.data.name;
  const image = basicData.data.sprites.other['official-artwork']['front_default'];
  const height = basicData.data.height;
  const weight = basicData.data.weight;
  const index = detailData.data.pokedex_numbers[0]['entry_number'];
  const names = detailData.data.names.filter(e => e.language.name === 'ja');
  const name = names[0].name;
  const genuses = detailData.data.genera.filter(e => e.language.name === 'ja');
  const genus = genuses[0].genus;
  const descriptions = detailData.data.flavor_text_entries.filter(e => e.language.name === 'ja');
  const description = descriptions[0].flavor_text;
  return {
    id: nameId,
    image: image,
    height: height,
    weight: weight,
    index: index,
    name: name,
    genus: genus,
    description: description,
  };
};
