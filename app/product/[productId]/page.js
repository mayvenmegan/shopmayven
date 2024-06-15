
import {cache} from "react";
import ProductPage from "@/components/ProductPage/ProductPage";
import replaceAndRemoveDash from "@/utils/replaceAndRemoveDash";

const algoliasearch = require("algoliasearch");
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  );
const index = searchClient.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME);

const getPost = cache(async (productObjectId) => {
  const productObj = await index.getObject(productObjectId);
  // console.log(productObj)
  return productObj
})


export async function generateMetadata ({params, searchParams}) {
  // console.log(params, searchParams.id)
  // const productData = await getPost(searchParams.id)
  // console.log(productData)
  return {
    title: replaceAndRemoveDash(params.productId) + " ~ Product",
    description: `It is the product page of ${params.productId} product on shopmayven`,
  }
}                                 

export default async function MainProductPage ({searchParams}) {
  const productData = await getPost(searchParams.id)
  return (
    <div className='py-[30px] px-[50px] max-[600px]:px-10 max-[480px]:px-5'>
      <ProductPage productData ={productData } />
    </div>
  );
};


