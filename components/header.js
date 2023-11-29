import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Searchbox = () => {
  return (
    <header className='header'>
      <h1 className='header-title'>
        <Link href='/'>
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
      </h1>
    </header>
  );
};

export default Searchbox;
