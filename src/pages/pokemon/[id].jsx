import { getAllPokemons, getPokemon } from '@/libs/pokemon';
import Head from 'next/head';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const pokemons = await getAllPokemons();
  return {
    paths: pokemons.map(pokemon => ({
      params: { id: pokemon.id },
    })),
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const pokemon = await getPokemon(id);
  return {
    props: {
      pokemon,
    },
  };
};

const Pokemon = props => {
  return (
    <>
      <Head>
        <title>{`ポケモン図鑑 - ${props.pokemon.name}`}</title>
      </Head>
      <main>
        <article>
          <div>
            <Image src={props.pokemon.image} alt={props.pokemon.name} width={200} height={200} />
          </div>
          <div>
            <div>{`No. ${`${props.pokemon.index}`.padStart(4, '0')}`}</div>
            <h2>{props.pokemon.name}</h2>
            <ul>
              <li>分類: {props.pokemon.genus}</li>
              <li>タイプ: {props.pokemon.types.map(type => type.type.name).join(', ')}</li>
              <li>高さ: {`${props.pokemon.height / 10}m`}</li>
              <li>重さ: {`${props.pokemon.weight / 10}kg`}</li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
};

export default Pokemon;
