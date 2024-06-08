import Link from "next/link";
import Image from "next/image";

import ImageMagnifier from "./ImageMagnifier";
import Ingredients from "./Ingredients";

const ProductPageLeft = ({ product }) => {
  return (
    <div className="flex flex-col gap-2.5 w-[40%] max-[750px]:w-full">
      {/* Product's brand logo */}
      <div className="relative w-56 h-16">
        <Image
          src={product.brandLogoURL}
          alt={`${product.brand} logo`}
          fill
          style={{
            objectFit: "contain",
          }}
          sizes="66vw"
        />
      </div>
      {/* Product title */}
      <h2 className="m-0 text-2xl font-black leading-none mt-2.5">
        {product.productTitle.toUpperCase()}
      </h2>
      {/* Product image */}
      <ImageMagnifier
        src={product.productImageURL}
        magnifierHeight={280}
        magnifierWidth={380}
        zoomLevel={3}
        alt={product.productTitle}
        className="max-w-full max-h-full object-contain"
      />

      <Ingredients productIngredients={product.ingredients} />
      {/* Product buy pages links */}
      <div className="click-to-buy">
        <h2 className="m-0 mt-5 mb-2 text-xl font-semibold text-green-600">
          Buy from here:
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          columnGap: "10px",
          rowGap: "20px",
        }}>
          {product.buyLinks.map((buyLink, index) => {
            return (
              buyLink.productURL && (
                <Link
                  href={buyLink.productURL}
                  target="_blank"
                  className="product-link relative w-full h-9"
                  key={`buyLink-${index}`}
                >

                  <Image
                    src={buyLink.retailerLogoURL}
                    alt={`${buyLink.retailerName} logo`}
                    fill
                    style={{
                      objectFit:"contain"
                    }}
                    sizes="66vw"
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
