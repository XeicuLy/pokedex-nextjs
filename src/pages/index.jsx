import { Card } from '@/components/elements/Card';
import { BASE_URL } from '@/const/const';
import { getAllPokemon, getPokemon } from '@/libs/pokemon';
import { loadingState, nextURLState, pokemonDataState, prevURLState } from '@/stores/Atom';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const Home = () => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [nextURL, setNextURL] = useRecoilState(nextURLState);
  const [prevURL, setPrevURL] = useRecoilState(prevURLState);
  const [pokemonData, setPokemonData] = useRecoilState(pokemonDataState);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      const res = await getAllPokemon(BASE_URL);
      console.log(res);
      // 各ポケモンの詳細データを取得
      loadPokemon(res.results);
      setNextURL(res.next);
      setPrevURL(res.previous);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async data => {
    const _pokemonData = await Promise.all(
      data.map(pokemon => {
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    setPokemonData(_pokemonData);
  };
  console.log(pokemonData);

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
    setLoading(true);
    const data = await getAllPokemon(nextURL);
    // console.log(data);
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
      <div>
        {loading ? (
          <h1 className='text-center'>ロード中...</h1>
        ) : (
          <>
            <div className='grid grid-cols-4 grid-rows-5 gap-8 '>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div className='flex content-center justify-center gap-8 py-6'>
              <button
                className='group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white'
                onClick={handlePrevPage}
              >
                Prev
                <div className='absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30'></div>
              </button>
              <button
                className='group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white'
                onClick={handleNextPage}
              >
                Next
                <div className='absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30'></div>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
