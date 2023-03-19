import { useRouter } from 'next/router';

export const Button = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <>
      <div className='mx-auto my-2 mt-3 box-border w-1/4 rounded-md border-2 border-gray-800'>
        <button className='block h-full w-full' onClick={handleClick}>
          戻る
        </button>
      </div>
    </>
  );
};
