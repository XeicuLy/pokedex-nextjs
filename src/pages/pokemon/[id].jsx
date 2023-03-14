import { Button } from '@/components/elements/Button';
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
          <div className='text-center text-xl'>{`No. ${`${props.pokemon.index}`.padStart(
            4,
            '0',
          )}`}</div>
          <div className='flex content-center justify-center'>
            <Image
              src={props.pokemon.image}
              alt={props.pokemon.name}
              width={200}
              height={200}
              priority={true}
            />
          </div>
          <div className='flex flex-col content-center justify-center text-center'>
            <h2 className='text-3xl'>{props.pokemon.name}</h2>
            <div className='mt-2.5 flex justify-center'>
              <ul className='w-5/12 rounded-md border-2 border-gray-800 p-4'>
                <li className='text-lg'>分類: {props.pokemon.genus}</li>
                <li className='mt-1.5 text-lg'>高さ: {`${props.pokemon.height / 10}m`}</li>
                <li className='mt-1.5 text-lg'>重さ: {`${props.pokemon.weight / 10}kg`}</li>
                <li className='mt-2 text-xl'>{props.pokemon.description}</li>
              </ul>
            </div>
            <Button />
          </div>
        </article>
      </main>
    </>
  );
};

export default Pokemon;
