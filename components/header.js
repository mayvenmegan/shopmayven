import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({py='py-10'}) => {
  return (
    <header className={`flex justify-center flex-row items-center ${py} px-4 border-b-[5px] border-[#ff5a16] text-white mb-4 gap-4`}>

        <Link className='no-underline flex-row flex items-center justify-center gap-2.5' href='/'>
        <div className='w-[50px]'>   
            <Image
              priority
              src='/images/ShopMayvenBag_Transparent.png'
              width={50}
              height={70}
              alt='shopmayven logo'
              
            />
          </div>

          <div className='w-[230px]'>
          <Image
            priority
            src='/images/ShopMayven_Wordmark.png'
            width={230}
            height={38}
            alt='shopmayven wordmark'
          />
          </div>
        </Link>
    </header>
  );
};

export default Header;
