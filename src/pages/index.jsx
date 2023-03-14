import { getAllPokemons } from '@/libs/pokemon';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps = async () => {
  const pokemons = await getAllPokemons();
  return {
    props: {
      pokemons,
    },
  };
};

const Home = props => {
  return (
    <>
      <Head>
        <title>ポケモン図鑑</title>
      </Head>
      <main className='flex content-center justify-center'>
        <ul className='grid grid-cols-4 grid-rows-5 gap-8 py-5'>
          {props.pokemons.map(pokemon => (
            <li key={pokemon.name}>
              <Link href={`/pokemon/${encodeURIComponent(pokemon.id)}`}>
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  priority={true}
                  width={200}
                  height={200}
                />
                <div className='text-center text-lg'>{pokemon.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
