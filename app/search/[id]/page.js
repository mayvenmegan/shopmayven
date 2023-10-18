'use client';
import Link from 'next/link';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import searchClient from '../../../components/algolia'
import replaceAndRemoveChar from '../../../utils/replaceAndRemoveChar'
import replaceAndRemoveDash from '../../../utils/replaceAndRemoveDash'
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  Pagination,
  Stats,
  Configure,
  ClearRefinements
} from 'react-instantsearch';
import { Panel } from 'react-instantsearch-dom';
import '../../../styles/searchpage.css';



const SearchPage = ({ params }) => {
  // console.log(params.id)

  const handleProductClick = (hit) => {
    // console.log(JSON.stringify(hit))
    localStorage.removeItem('mayvenProduct');
    localStorage.setItem(
      'mayvenProduct',
      JSON.stringify({ ...hit, searchPageQuery: params.id })
    );
    // console.log(localStorage.getItem('mayvenProduct'));
  };

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName='dev_MAYVEN'
      initialUiState={{
        dev_MAYVEN: {
          query: replaceAndRemoveDash(params.id),
          page: 1,
        },
      }}
    >
      <Configure hitsPerPage={12} />
      <div className='searchpage'>
        <Header />

        <div className='searchpage-main'>

          <div className='searchpage-main-left'>
          <div className='clear-refinements'>
          <ClearRefinements 
          includedAttributes={['productType', 'brandValues', 'location.state', 'product/labelClaims', 'brand' ]} 
          translations={{ resetButtonText: 'Reset' }}

          />
          </div>

            <Panel header='CATEGORY'>
              <RefinementList attribute={'productType'} />
            </Panel>
            <Panel header='BRAND'>
              <RefinementList
                attribute={'brand'}
                searchable={true}
                limit={8}
                showMore={true}
              />
            </Panel>

            <Panel header='PRODUCT VALUES'>
              <RefinementList attribute={'brandValues'} operator={'and'} />
            </Panel>

            <Panel header='HEADQUARTERED'>
              <RefinementList
                attribute={'location.state'}
                searchable={true}
                limit={6}
                showMore={true}
              />
            </Panel>

            <Panel header='BRAND CLAIMS'>
              <RefinementList
                attribute={'product/labelClaims'}
                operator={'and'}
                searchable={true}
                limit={6}
                showMore={true}
              />
            </Panel>
          </div>
          <div className='searchpage-main-right'>
            <div className='searchpage-search-section'>
              <SearchBox placeholder='What are you looking for?' />
            </div>
            <div id='stats'>
              <Stats />
            </div>
            <div id='hits'>
              <Hits
                hitComponent={({ hit }) => {
                  // console.log(hit.location)
                  // console.log(hit.objectID)

                  return (
                    <Link
                      href={{ pathname: `/product/${replaceAndRemoveChar(hit.productTitle)}` }}
                      className='open-product-page'
                      onClick={() => handleProductClick(hit)}
                    >
                      <article>
                        <div className='article-img'>
                          <img src={hit.imageURL} alt='product-img' />
                        </div>
                        <h3>{hit.productTitle}</h3>
                        <p>{hit.brand}</p>
                      </article>
                    </Link>
                  );
                }}
              />
            </div>
            <div id='pagination'>
              <Pagination />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </InstantSearch>
  );
};

export default SearchPage;
