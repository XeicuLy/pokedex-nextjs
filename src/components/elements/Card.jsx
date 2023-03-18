import { BASE_URL } from '@/const/const';
import axios from 'axios';
import Image from 'next/image';

export const Card = ({ pokemon }) => {
  console.log(pokemon);
  // const detailURL = pokemon.species.url;
  // const image = pokemon.sprites.other['official-artwork']['front_default'];
  // const height = pokemon.height;
  // const weight = pokemon.weight;

  return (
    <div>
      <div>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          priority={true}
          width={200}
          height={200}
        />
      </div>
      <h3>{pokemon.name}</h3>
      <div>
        <div>
          <p>重さ: {pokemon.weight}</p>
        </div>
        <div>
          <p>高さ: {pokemon.height}</p>
        </div>
      </div>
    </div>
  );
};
