import { Card } from '@/components/elements/Card';
import { BASE_URL } from '@/const/const';
import { getAllPokemon, getPokemon } from '@/libs/pokemon';
import { loadingState, nextURLState, prevURLState } from '@/stores/Atom';
import { pokemon, pokemonData } from '@/types/type';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const Home = () => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [nextURL, setNextURL] = useRecoilState(nextURLState);
  const [prevURL, setPrevURL] = useRecoilState(prevURLState);
  const [pokemonData, setPokemonData] = useState<pokemonData[]>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      const res = await getAllPokemon(BASE_URL);
      // 各ポケモンの詳細データを取得
      loadPokemon(res.results);
      // 次のページのURLをセット
      setNextURL(res.next);
      // 前のページのURLをセット
      setPrevURL(res.previous);
      // ローディング終了
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: []) => {
    const _pokemonData: pokemonData[] = await Promise.all(
      data.map((pokemon: pokemon) => {
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    setPokemonData(_pokemonData);
  };

  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    const data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handleNextPage = async () => {
    if (!nextURL) return;
    setLoading(true);
    const data = await getAllPokemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>ポケモン図鑑</title>
      </Head>
      <div className='mx-auto my-0 w-9/12 pt-6'>
        {loading ? (
          <h1 className='text-center'>ロード中...</h1>
        ) : (
          <>
            <ul className='grid grid-cols-4 grid-rows-5 gap-8 '>
              {pokemonData.map((pokemon: pokemonData, i: number) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </ul>
            <div className='flex content-center justify-center gap-8 py-6'>
              {!prevURL ? (
                <></>
              ) : (
                <button
                  className='group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white'
                  onClick={handlePrevPage}
                >
                  Prev
                  <div className='absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30'></div>
                </button>
              )}
              {!nextURL ? (
                <></>
              ) : (
                <button
                  className='group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white'
                  onClick={handleNextPage}
                >
                  Next
                  <div className='absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30'></div>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
