'use client';
import { RefinementList, ClearRefinements, Stats } from 'react-instantsearch';
import { Panel } from 'react-instantsearch-dom';
import { FaFilter } from 'react-icons/fa6';
import React, { useEffect, useState } from 'react';

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import './filters.css';

const RenderFilters = () => {
  return (
    <div className='filters-section'>
      <div className='clear-refinements'>
        <ClearRefinements
          includedAttributes={[
            'productType',
            'brandValues',
            'location.state',
            'productLabelClaims',
            'brand',
          ]}
          translations={{ resetButtonText: 'Reset Filters' }}
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
          attribute={'productLabelClaims'}
          operator={'and'}
          searchable={true}
          limit={6}
          showMore={true}
        />
      </Panel>
    </div>
  );
};

const Filters = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const updateWindowSize = () => {
      const width = window.innerWidth;
      setScreenSize(width);
    };
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return screenSize > 700 ? (
    <div className='searchpage-main-left max-w-[280px]'>
      <RenderFilters />
    </div>
  ) : (
    // Filters for smaller screen in modal
    <div className='filters-sm fixed left-0 z-50 bg-white'>
      {!isOpen && (
        <div className='flex flex-wrap gap-4 fixed bottom-5 right-5'>
          {/* Open Filters Modal Button */}

          <button
            className='open-filters-button flex flex-row items-center justify-center py-2 px-3 rounded-lg text-md font-medium bg-[#20b04b] text-[#ffffff] cursor-pointer gap-1.5'
            onClick={toggleDrawer}
          >
            <FaFilter color='#fff' />
            Filters
          </button>
        </div>
      )}

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='bottom'
        size={'90%'}
        lockBackgroundScroll={true}
        className='p-5 flex flex-col gap-5 rounded-t-xl'
      >

          <div className='filters-drawer-top flex justify-between items-center text-2xl font-bold'>
            Filters
            <Stats
              translations={{
                rootElementText({ nbHits }) {
                  return (
                    nbHits &&
                    (nbHits === 1 ? (
                      <div>
                        {nbHits.toLocaleString()}
                        <span style={{ fontWeight: '400' }}> result</span>
                      </div>
                    ) : (
                      <div>
                        {nbHits.toLocaleString()}
                        <span style={{ fontWeight: '400' }}> results</span>
                      </div>
                    ))
                  );
                },
              }}
            />
          </div>

          <div className='border border-gray-100 w-full'></div>

          <div className='filters-drawer-middle mb-16 overflow-y-auto no-scrollbar'>
            <RenderFilters />
          </div>
          <div className='filters-drawer-bottom border-t border-gray-200 bg-white flex justify-center items-center text-2xl font-bold gap-2.5 fixed bottom-0 p-5 w-full -mx-5'>
            <ClearRefinements
              includedAttributes={[
                'productType',
                'brandValues',
                'location.state',
                'belClaims',
                'brand',
              ]}
              translations={{ resetButtonText: 'Reset Filters' }}
              className='max-w-[220px]'
            />
            <button
              className='close-filters-btn flex flex-row items-center justify-center py-2 px-4 rounded-lg text-lg font-medium bg-[#20b04b] text-[#ffffff] cursor-pointer max-w-[220px]'
              onClick={toggleDrawer}
            >
              Show Results
            </button>
          </div>

      </Drawer>
    </div>
  );
};

export default Filters;
