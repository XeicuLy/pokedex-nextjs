import Link from 'next/link';

export const Button = () => {
  return (
    <>
      <div className='mx-auto my-2 mt-3 box-border w-1/4 rounded-md border-2 border-gray-800'>
        <Link className='block h-full w-full' href={'/'}>
          戻る
        </Link>
      </div>
    </>
  );
};
