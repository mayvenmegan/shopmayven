import Link from 'next/link';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';

import replaceAndRemoveChar from '@/utils/replaceAndRemoveChar';

//for capitalizing letter
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
const ProductPageRight = ({product}) => {

  return (
    <div className='max-w-[60%] flex flex-col gap-10 max-[750px]:max-w-full'>
    {/* Location details */}
    <div className='flex text-lg gap-2.5'>
      <div className='relative w-[160px] h-[160px]'>
        <Image
          src={product.location.stateMapURL}
          alt={`image of ${product.location.state}`}
          fill
          style={{
            objectFit: 'contain',
          }}
          sizes="33vw"
        />
      </div>
      <div className='flex text-lg items-center justify-center'>
        {/* Location Icon*/}
        <FaLocationDot size={25} className='-mt-8 -ml-0.5' name={`${product.location?.city}`} />
        {/* Location Info */}
        <div className='flex flex-col font-medium'>
          <div>
            <Link
              href={`/products/${replaceAndRemoveChar(
                product.location?.city
              )}`}
              className=' no-underline text-[#222] text-lg hover:underline'
            >
              {product.location?.city}
            </Link>
          </div>

          <div>
            <Link
              href={`/products/${replaceAndRemoveChar(
                product.location?.state
              )}`}
              className='no-underline text-[#222] text-lg hover:underline'
            >
              {product.location?.state}
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* Product Specifications/Details section */}
    {/* Product brand values */}
    {product.brandValues.length > 0 && (
      <div className='product-brand-values'>
        <p className='m-0 pb-2.5 text-lg font-bold'>Brand Values</p>
        <div className='grid grid-cols-2 gap-2.5'>
          {/* Brand Values */}
          {product.brandValues.map((brandValue, indexName) => {
            return (
              <Link
                className='py-2.5 px-5 rounded-lg border border-green-600 text-green-600 bg-green-100 font-medium flex items-center justify-center cursor-pointer hover:shadow-md	'
                key={brandValue}
                href={`/products/${replaceAndRemoveChar(brandValue)}`}

              >
                {brandValue}
              </Link>
            );
          })}
        </div>
      </div>
    )}

    {/* Product claims */}
    {product.productLabelClaims.length > 0 && (
      <div className='product-claims'>
        <p className='m-0 pb-2.5 text-lg font-bold'>
          Product Label Claims
        </p>
        <div className='grid grid-cols-2 gap-2.5'>
          {product.productLabelClaims.map((productClaim) => {
            return (
              <Link
                className='py-2.5 px-5 rounded-lg no-underline border border-[#ff5a16] text-[#ff5a16] bg-[#fff0ea] font-medium flex items-center justify-center cursor-pointer hover:shadow-md'
                key={productClaim}
                href={`/products/${replaceAndRemoveChar(productClaim)}`}
              >
                {productClaim}
              </Link>
            );
          })}
        </div>
      </div>
    )}

    {/* Product attributes */}
    {product.productAttributes.length > 0 && (
      <div className='product-attributes'>
        <p className='m-0 pb-2.5 text-lg font-bold'>Product Attributes</p>
        <div className='grid grid-cols-2 gap-2.5'>
          {product.productAttributes.map((productAttribute) => {
            return (
              <Link
                className='py-2.5 px-5 rounded-lg no-underline border border-[#6E72A0] text-[#6E72A0] bg-[#eaecff] font-medium flex items-center justify-center cursor-pointer hover:shadow-md'
                key={productAttribute}
                href={`/products/${replaceAndRemoveChar(productAttribute)}`}

              >
                {capitalizeFirstLetter(productAttribute)}
              </Link>
            );
          })}
        </div>
      </div>
    )}
  </div>
  )
}

export default ProductPageRight