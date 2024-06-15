
import Link from "next/link";

import ProductPageLeft from "./ProductPageLeft";
import ProductPageRight from "./ProductPageRight";
import GoBack from "./GoBack";

export default function ProductPage ({productData}) {
  return (
    <div>
      <div className='inline-block'>
        <GoBack />
      </div>

      {/* Product page main */}
      {
        productData !==null && (
      <div className='flex items-start gap-10 py-5 max-[750px]:flex-col max-[750px]:gap-14'>
        <ProductPageLeft product={productData}/>
        <ProductPageRight product={productData} />
      </div>

      )
      }
    </div>
  );
};


