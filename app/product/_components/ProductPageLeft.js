import Link from "next/link";
import { useState } from "react";
import ImageMagnifier from "./ImageMagnifier";
import Ingredients from "../_components/ingredients";

const ProductPageLeft = ({ product }) => {

  return (
    <div className="flex flex-col gap-2.5 w-[40%] max-[750px]:w-full">
      {/* Product's brand logo */}
      <div className="w-[40%] h-[12vh]">
        <img
          className="w-full h-full object-contain"
          src={product.brandLogoURL}
          alt="brand-logo"
        />
      </div>
      {/* Product title */}
      <h2 className="m-0 text-2xl font-black leading-none mt-2.5">
        {product.productTitle.toUpperCase()}
      </h2>
      {/* Product image */}
      <div className="w-[90%] max-[460px]:w-[98%] max-h-[65vh] rounded-2xl flex items-center justify-center"
      >
        <ImageMagnifier
          src={product.productImageURL}
          // width={imageSize.width}
          // height={imageSize.height}
          magnifierHeight={280}
          magnifierWidth={380}
          zoomLevel={3}
          alt="Product Image"
          className="max-w-full max-h-full object-contain"
        />


      </div>

      <Ingredients productIngredients={product.ingredients} />
      {/* Product buy pages links */}
      <div className="click-to-buy">
        <h2 className="m-0 mt-5 mb-2 italic text-2xl font-semibold text-[#20b04b]">
          Buy from here:
        </h2>
        <div className="buyLinks-grid">
          {product.buyLinks.map((buyLink, index) => {
            return (
              buyLink.productURL && (
                <Link
                  href={buyLink.productURL}
                  target="_blank"
                  className="product-link w-full h-9"
                  key={`buyLink-${index}`}
                >
                  <img
                    className="w-full h-full object-contain"
                    src={buyLink.retailerLogoURL}
                    alt="brand-logo"
                  />
                </Link>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPageLeft;
