import { Button } from '@/components/elements/Button';
import { BASE_URL } from '@/const/const';
import { getPokemon } from '@/libs/pokemon';
import { pokemonDetailDataState } from '@/stores/Atom';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const Pokemon = () => {
  const [pokemonDetailData, setPokemonDetailData] = useRecoilState(pokemonDetailDataState);
  const router = useRouter();
  useEffect(() => {
    const fetchPokemonData = async () => {
      const id = router.query.id;
      const res = await getPokemon(BASE_URL + id);
      setPokemonDetailData(res);
    };
    fetchPokemonData();
  }, []);

  return (
    <>
      <Head>
        <title>{`ポケモン図鑑 - ${pokemonDetailData.name}`}</title>
      </Head>
      <article>
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
