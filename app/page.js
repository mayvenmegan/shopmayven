'use client'
import { useRouter } from 'next/navigation';
import React, {useState} from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import { InstantSearch, SearchBox } from 'react-instantsearch';
import searchClient from '../components/algolia'

import replaceAndRemoveChar from "../utils/replaceAndRemoveChar"

export default function Home() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const handleChange = (e) => {
    // console.log(e.uiState.dev_MAYVEN.query);
    const query=e.uiState.dev_MAYVEN.query;

    setSearchQuery(replaceAndRemoveChar(query));
  }
  return (

    <InstantSearch searchClient={searchClient} indexName='dev_MAYVEN' onStateChange={handleChange}>
      <Header />
      <div className='search-section'>
        <SearchBox placeholder='What are you looking for?' onSubmit={() => router.push(`search/${searchQuery}`)}/>

        <button className='search-btn' onClick={() => router.push(`search/${searchQuery}`)}> 
        Search
        </button>
      </div>
      <div className='footer'>
      <Footer />
      </div>
    </InstantSearch>
  );
}
