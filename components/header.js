import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({py='py-10'}) => {
  return (
    <header className={`flex justify-center flex-row items-center ${py} px-4 border-b-[5px] border-[#ff5a16] text-white mb-4 gap-4`}>

        <Link className='no-underline flex-row flex items-center justify-center gap-2.5' href='/'>
          <Image
            priority
            src='/images/MayvenBag_Transparent.png'
            width={50}
            height={67}
            alt='logo'
            
          />
          <Image
            priority
            src='/images/Mayven_Wordmark.png'
            width={220}
            height={35}
            alt='mayven_wordmark'
          />
        </Link>
    </header>
  );
};

export default Header;
