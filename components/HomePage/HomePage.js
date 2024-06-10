"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { InstantSearch, SearchBox } from "react-instantsearch";
import searchClient from "../algolia";
import "../../styles/home-page.css";
import replaceAndRemoveChar from "../../utils/replaceAndRemoveChar";
import Link from "next/link";

const suggestionBtnClasses =
  "w-full flex flex-col items-center justify-center gap-0 px-6 py-3.5 rounded-2xl text-xl font-medium bg-[#ff9eb0] text-[#fff5f7] border-2 border-solid border-[#f0637d] hover:text-white hover:border-[#d33e59] cursor-pointer max-[520px]:text-lg max-[520px]:rounded-xl max-[520px]:px-5 max-[520px]:py-3.5";

const HomePage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
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
      <div className="search-section flex flex-row justify-center items-center p-10 gap-5 max-[520px]:flex-col max-[520px]:px-5">
        <SearchBox
          placeholder="What are you looking for?"
          onSubmit={() =>
            router.push(searchQuery === "" ? `` : `products/${searchQuery}`)
          }
          classNames={{
            root: "!w-[70%] max-[520px]:!w-full max-w-[1324px]",
          }}
        />

        <button
          className="search-btn bg-green-600 text-green-100 outline-none border-none rounded-[22px] text-lg font-medium py-2.5 px-[22px] cursor-pointer hover:text-white hover:scale-105"
          onClick={() =>
            router.push(
              searchQuery === "" ? `/products/all` : `products/${searchQuery}`
            )
          }
        >
          Find it!
        </button>
      </div>
      <div className="search-sugges-box grid gap-2.5 my-0 mx-auto w-[70%] max-w-[1240px] !mb-10 max-[520px]:w-[90%] min-[1300px]:w-[60%]"
      >
        <Link
          href={`/products/female-founder-suncreen-spf-50`}
          className="w-full no-underline"
        >
          <button className={suggestionBtnClasses}>
            Female Founder <div className="-mt-2">Sunscreen SPF 50</div>
          </button>
        </Link>
        <Link
          href={`/products/vegan-shampoo-made-in-usa`}
          className="w-full no-underline"
        >
          <button className={suggestionBtnClasses}>
            Vegan Shampoo <div className="-mt-2">Made in the USA</div>
          </button>
        </Link>
        <Link
          href={`/products/anti-cruelty-baby-lotion`}
          className="w-full no-underline"
        >
          <button className={suggestionBtnClasses}>
            Anti Cruelty <div className="-mt-2">Baby Lotion</div>
          </button>
        </Link>
        <Link
          href={`/products/face-cream-paraben-free`}
          className="w-full no-underline"
        >
          <button className={suggestionBtnClasses}>
            Face Cream <div className="-mt-2">Paraben Free</div>
          </button>
        </Link>
      </div>
    </InstantSearch>
  );
};

export default HomePage;
