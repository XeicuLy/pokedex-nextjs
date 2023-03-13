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
      <main>
        <ul>
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
                <div>{pokemon.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
