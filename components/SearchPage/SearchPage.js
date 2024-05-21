'use client';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from 'react';

import searchClient from '@/components/algolia';
import replaceAndRemoveChar from '@/utils/replaceAndRemoveChar';
import replaceAndRemoveDash from '@/utils/replaceAndRemoveDash';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats,
  Configure,
} from 'react-instantsearch';

import '../../styles/searchpage.css';
import Filters from '@/components/SearchPage/SearchPageFilters/Filters';


const SearchPage = ({ params }) => {

  // console.log(params.id)
  
//   const changeURL = (newURL) => {
//     // Change the URL without refreshing the page
//     window.history.pushState(null, '', `/search/${newURL}`);
//     console.log(newURL);
// };

//   const queryHook = (query, search) => {
//     query !== "" && changeURL(query);
//     search(query);
    
//   };


  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
      initialUiState={{
        prod_SHOPMAYVEN: {
          query: replaceAndRemoveDash(params.id),
          page: 1,
        },
      }}
    >
      <Configure hitsPerPage={20} />
        <div className='searchpage-main'>
          {/* Filter */}

          <Filters />
          <div className='searchpage-main-right'>
            <div className='searchpage-search-section'>
              <SearchBox placeholder='What are you looking for?'  />
              {/* <SearchBox placeholder='What are you looking for?' queryHook={queryHook} /> */}
            </div>
            <div id='stats'>
              <Stats />
            </div>
            <div id='hits'>
              <Hits
                hitComponent={({ hit }) => {
                  const slug = replaceAndRemoveChar(hit.productTitle)
                  return (
                    <Link
                    href={`/product/${slug}?id=${hit.objectID}`}
                      className='open-product-page'
                    >
                      <article>
                        <div className='article-img'>
                          <img src={hit.productImageURL} alt='product-img' />
                        </div>
                        <h3 className='w-full text-base font-extrabold leading-tight'>
                          {hit.productTitle}
                        </h3>
                        <p className='w-full mt-1.5'>{hit.brand}</p>
                      </article>
                    </Link>
                  );
                }}
              />
            </div>
            <div id='pagination' className='mt-8 text-center'>
              <Pagination
                padding={1}
                showPrevious={false}
                showNext={false}
                classNames={{
                  list: 'gap-2',
                  link: 'text-md font-black rounded-lg p-4',
                }}
              />
            </div>
          </div>
        </div>
    </InstantSearch>
  );
};

export default SearchPage;
