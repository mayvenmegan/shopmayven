'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import { InstantSearch, SearchBox } from 'react-instantsearch';
import searchClient from '../components/algolia';

import replaceAndRemoveChar from '../utils/replaceAndRemoveChar';
import Link from 'next/link';

import '../styles/homepage.css'

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = (e) => {
    const query = e.uiState.prod_SHOPMAYVEN.query;

    setSearchQuery(replaceAndRemoveChar(query));
  };
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
      onStateChange={handleChange}
    >
      <Header />
      <div className='search-section'>
        <SearchBox
          placeholder='What are you looking for?'
          onSubmit={() => router.push(searchQuery==="" ? `/products` :`search/${searchQuery}`)}
        />

        <button
          className='search-btn'
          onClick={() => router.push(searchQuery==="" ? `/products` :`search/${searchQuery}`)}
        >
          Find it!
        </button>
      </div>
      <div className='search-sugges-box'>

          <Link
            href={`/search/female-founder-suncreen-spf-50`}
            className='homepage-search-suggestion'
          >
            <button className='flex flex-col items-center justify-center gap-0 px-6 py-3.5 rounded-2xl text-xl max-[520px]:text-lg max-[520px]:rounded-xl max-[520px]:px-5 max-[520px]:py-3.5'>
              Female Founder <div className='-mt-2'>Sunscreen SPF 50</div>{' '}
            </button>
          </Link>
          <Link
            href={`/search/vegan-shampoo-made-in-usa`}
            className='homepage-search-suggestion'
          >
            <button className='flex flex-col items-center justify-center gap-0 px-6 py-3.5 rounded-2xl text-xl max-[520px]:text-lg max-[520px]:rounded-xl max-[520px]:px-5 max-[520px]:py-3.5'>
              Vegan Shampoo <div className='-mt-2'>Made in the USA</div>{' '}
            </button>
          </Link>
        <Link
          href={`/search/anti-cruelty-baby-lotion`}
          className='homepage-search-suggestion'
        >
          <button className='flex flex-col items-center justify-center gap-0 px-6 py-3.5 rounded-2xl text-xl max-[520px]:text-lg max-[520px]:rounded-xl max-[520px]:px-5 max-[520px]:py-3.5'>
            Anti Cruelty <div className='-mt-2'>Baby Lotion</div>{' '}
          </button>
        </Link>
        <Link
          href={`/search/face-cream-paraben-free`}
          className='homepage-search-suggestion'
        >
          <button className='flex flex-col items-center justify-center gap-0 px-6 py-3.5 rounded-2xl text-xl max-[520px]:text-lg max-[520px]:rounded-xl max-[520px]:px-5 max-[520px]:py-3.5'>
          Face Cream <div className='-mt-2'>Paraben Free</div>{' '}
          </button>
        </Link>
      </div>

        <Footer />

    </InstantSearch>
  );
}
