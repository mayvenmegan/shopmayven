'use client';
import { useRouter } from "next/navigation";
import React, {useState, useEffect} from 'react';
import { FaLessThan } from "react-icons/fa6";
import { useSearchParams } from 'next/navigation'

const algoliasearch = require("algoliasearch");
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  );
const index = searchClient.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME);

import ProductPageLeft from "@/components/ProductPage/ProductPageLeft";
import ProductPageRight from "@/components/ProductPage/ProductPageRight";


export default function ProductPage () {
  const [product, setProduct] = useState(null)
  
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/products/all'); 
    }
  };

  useEffect(() => {
    index.getObject(productId).then(object => {
      setProduct(object);
      // console.log(object);    
    });
  }, [])


  return (
    <div className='py-[30px] px-[50px] max-[600px]:px-10 max-[480px]:px-5'>
      <div className='inline-block'>
        <button
          onClick={goBack}
          className='flex items-center justify-start no-underline text-[#222] text-lg gap-[3px] hover:underline'
        >
          <FaLessThan size={18}/> Back to Search Results
        </button>
      </div>

      {/* Product page main */}
      {
        product !==null && (
      <div className='flex items-start gap-10 py-5 max-[750px]:flex-col max-[750px]:gap-14'>
        <ProductPageLeft product={product}/>
        <ProductPageRight product={product} />
      </div>

      )
      }
    </div>
  );
};


