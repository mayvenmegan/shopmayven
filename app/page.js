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
    // console.log(e.uiState.dev_MAYVEN.query);
    const query = e.uiState.dev_MAYVEN.query;

    setSearchQuery(replaceAndRemoveChar(query));
  };
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName='dev_MAYVEN'
      onStateChange={handleChange}
    >
      <Header />
      <div className='search-section'>
        <SearchBox
          placeholder='What are you looking for?'
          onSubmit={() => router.push(`search/${searchQuery}`)}
        />

        <button
          className='search-btn'
          onClick={() => router.push(`search/${searchQuery}`)}
        >
          Find it!
        </button>
      </div>
      <div className='search-sugges-box'>

          <Link
            href={`/search/female-founder-suncreen-spf-50`}
            className='homepage-search-suggestion'
          >
            <button>
              Female Founder <div>Sunscreen SPF 50</div>{' '}
            </button>
          </Link>
          <Link
            href={`/search/vegan-shampoo-made-in-usa`}
            className='homepage-search-suggestion'
          >
            <button>
              Vegan Shampoo <div>Made in the USA</div>{' '}
            </button>
          </Link>
        <Link
          href={`/search/anti-cruelty-baby-lotion`}
          className='homepage-search-suggestion'
        >
          <button>
            Anti Cruelty <div>Baby Lotion</div>{' '}
          </button>
        </Link>
        <Link
          href={`/search/face-cream-paraben-free`}
          className='homepage-search-suggestion'
        >
          <button>
          Face Cream <div>Paraben Free</div>{' '}
          </button>
        </Link>
      </div>

        <Footer />

    </InstantSearch>
  );
}
