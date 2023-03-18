import axios from 'axios';

export const getAllPokemon = async url => {
  const res = await axios.get(url);
  // console.log(res.data);
  return res.data;
};

export const getPokemon = async url => {
  const res = await axios.get(url);
  // console.log(res.data);
  return res.data;
};
