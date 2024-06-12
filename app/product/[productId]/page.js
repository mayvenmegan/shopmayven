import ProductPage from "@/components/ProductPage/ProductPage";
import replaceAndRemoveDash from "@/utils/replaceAndRemoveDash";

export async function generateMetadata ({params}) {
  return {
    title: replaceAndRemoveDash(params.productId) + " ~ Product",
    description: `It is the product page of ${params.productId} product on shopmayven`,
  }
}

export default function MainProductPage () {

  return (
    <div className='py-[30px] px-[50px] max-[600px]:px-10 max-[480px]:px-5'>
      <ProductPage />
    </div>
  );
};


