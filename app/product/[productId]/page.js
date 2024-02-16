'use client';
import Link from 'next/link';
// import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import { FaLessThan } from "react-icons/fa6";
import { useSearchParams } from 'next/navigation'

const algoliasearch = require("algoliasearch");
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  );
const index = searchClient.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME);

import ProductPageLeft from '../_components/ProductPageLeft';
import ProducPageRight from '../_components/ProducPageRight';
import '../../../styles/product-page.css';

const ProductPage = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const [product, setProduct] = useState(null)

  useEffect(() => {

    return () => {
      index.getObject(productId).then(object => {
        setProduct(object);
        // console.log(object);
      });
    }
  }, [])


  return (
    <div className='py-[30px] px-[50px] max-[600px]:px-10 max-[480px]:px-5'>
      <div className='inline-block'>
        <Link
          href={`/products`}
          className='flex items-center justify-start no-underline text-[#222] text-lg gap-[3px] hover:underline'
        >
          <FaLessThan size={18}/> Back to Search Results
        </Link>
      </div>

      {/* Product page main */}
      {
        product !==null && (
      <div className='flex items-start gap-10 py-5 max-[750px]:flex-col max-[750px]:gap-12'>
        {/* Product page left */}
        <ProductPageLeft product={product}/>

        {/* Product page right */}
        <ProducPageRight product={product} />
      </div>

      )
      }
    </div>
  );
};

export default ProductPage;
