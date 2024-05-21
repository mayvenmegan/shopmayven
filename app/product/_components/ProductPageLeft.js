import Link from "next/link";
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
      <div className="max-w-[80%] h-[65vh] rounded-2xl max-[970px]:w-[100%] max-[750px]:w-[60%] flex items-start justify-start">
        <ImageMagnifier
          src={product.productImageURL}
          // width={300}
          // height={200}
          magnifierHeight={210}
          magnifierWidth={300}
          zoomLevel={3}
          alt="Product Image"
          className="w-full h-full object-contain"
        />
{/* 
        <img
          className="w-full h-full object-contain rounded-xl"
          src={product.productImageURL}
          alt="product-img"
        /> */}

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
