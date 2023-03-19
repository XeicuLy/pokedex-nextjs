import { pokemonData } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';

export const Card: React.FC<{ key: number; pokemon: pokemonData }> = ({ pokemon }) => {
  return (
    <>
      <li className='overflow-hidden rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:shadow-lg'>
        <Link href={`/pokemon/${encodeURIComponent(pokemon.id)}`}>
          <Image
            className='mx-auto my-0'
            src={pokemon.image}
            alt={pokemon.name}
            priority={true}
            width={200}
            height={200}
          />
          <h3 className='text-center'>{pokemon.name}</h3>
        </Link>
      </li>
    </>
  );
};
