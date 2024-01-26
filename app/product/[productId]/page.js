'use client';
import Link from 'next/link';
// import Image from 'next/image';

import { FaLessThan } from "react-icons/fa6";
import '../../../styles/product-page.css';

import ProductPageLeft from '../_components/ProductPageLeft';
import ProducPageRight from '../_components/ProducPageRight';


const ProductPage = () => {
  const product = JSON.parse(localStorage.getItem('mayvenProduct'));

  const deleteItemFromLocalStorage = () => {
    localStorage.removeItem('mayvenProduct');
  };

  return (
    <div className='py-[30px] px-[50px] max-[600px]:px-10 max-[480px]:px-5'>
      <div className='inline-block'>
        <Link
          href={`/search/${product.searchPageQuery}`}
          className='flex items-center justify-start no-underline text-[#222] text-lg gap-[3px] hover:underline'
          onClick={deleteItemFromLocalStorage}
        >
          <FaLessThan size={18}/> Back to Search Results
        </Link>
      </div>

      {/* Product page main */}
      <div className='flex items-start gap-10 py-5 max-[750px]:flex-col max-[750px]:gap-12'>
        {/* Product page left */}
        <ProductPageLeft product={product}/>

        {/* Product page right */}
        <ProducPageRight product={product} deleteItemFromLocalStorage={deleteItemFromLocalStorage}/>
      </div>
    </div>
  );
};

export default ProductPage;
