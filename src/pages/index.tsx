import { getAllPokemons } from '@/libs/pokemon';
import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';

const Home: NextPage = () => {
  const didLogRef = useRef(false);
  useEffect(() => {
    if (didLogRef.current === false) {
      didLogRef.current = true;
      getAllPokemons();
    }
  }, []);
  return (
    <>
      <div className='text-center'>dictionary部分</div>
    </>
  );
};

export default Home;
