import { Button } from '@/components/elements/Button';
import { BASE_URL } from '@/const/const';
import { getPokemon } from '@/libs/pokemon';;
import { PokemonDetailData } from '@/types/type';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Pokemon = () => {
  const [pokemonDetailData, setPokemonDetailData] = useState<PokemonDetailData>();
  const router = useRouter();
  useEffect(() => {
    const fetchPokemonData = async () => {
      const id = router.query.id;
      const res: PokemonDetailData = await getPokemon(BASE_URL + id);
      setPokemonDetailData(res);
    };
    if (router.query.id) {
      fetchPokemonData();
    }
  }, [router.query.id]);

  if (!pokemonDetailData) {
    return;
  }

  return (
    <>
      <Head>
        <title>{`ポケモン図鑑 - ${pokemonDetailData.name}`}</title>
      </Head>
      <article className='pt-6'>
        <div className='text-center text-xl'>{`No. ${`${pokemonDetailData.index}`.padStart(
          4,
          '0',
        )}`}</div>
        <div className='flex content-center justify-center'>
          <Image
            src={pokemonDetailData.image}
            alt={pokemonDetailData.name}
            width={200}
            height={200}
            priority={true}
          />
        </div>
        <div className='flex flex-col content-center justify-center text-center'>
          <h2 className='text-3xl'>{pokemonDetailData.name}</h2>
          <div className='mt-2.5 flex justify-center'>
            <ul className='w-5/12 rounded-md border-2 border-gray-800 p-4'>
              <li className='text-lg'>分類: {pokemonDetailData.genus}</li>
              <li className='mt-1.5 text-lg'>高さ: {`${pokemonDetailData.height / 10}m`}</li>
              <li className='mt-1.5 text-lg'>重さ: {`${pokemonDetailData.weight / 10}kg`}</li>
              <li className='mt-2 text-xl'>{pokemonDetailData.description}</li>
            </ul>
          </div>
          <Button />
        </div>
      </article>
    </>
  );
};

export default Pokemon;
