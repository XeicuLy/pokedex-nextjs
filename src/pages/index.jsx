import { Card } from '@/components/elements/Card';
import { BASE_URL } from '@/const/const';
import { getAllPokemon, getPokemon } from '@/libs/pokemon';
import { loadingState, nextURLState, pokemonDataState, prevURLState } from '@/stores/Atom';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const Home = () => {
  // const [loading, setLoading] = useState(true);
  // const [nextURL, setNextURL] = useState('');
  // const [prevURL, setPrevURL] = useState('');
  // const [pokemonData, setPokemonData] = useState([]);
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
      <div className='text-center'>
        {loading ? (
          <h1>ロード中...</h1>
        ) : (
          <>
            <div>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div>
              <button onClick={handlePrevPage}>Prev</button>
              <button onClick={handleNextPage}>Next</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
