import Link from 'next/link';
import { FaLocationDot } from 'react-icons/fa6';
import replaceAndRemoveChar from '../../../utils/replaceAndRemoveChar';
// import Image from 'next/image';
import { useRouter } from 'next/navigation';

//for capitalizing letter
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
const ProducPageRight = ({product, deleteItemFromLocalStorage}) => {
    const router = useRouter();
  return (
    <div className='max-w-[60%] flex flex-col gap-10 max-[750px]:max-w-full'>
    {/* Location details */}
    <div className='flex text-lg gap-2.5'>
      <div className='w-[160px] h-[160px]'>
        <img
          className='w-full h-full object-contain'
          src={product.location.stateMapURL}
          alt='map-img'
        />
      </div>
      <div className='flex text-lg items-center justify-center'>
        {/* Location Icon*/}
        <FaLocationDot size={25} className='-mt-8 -ml-0.5' />
        {/* Location Info */}
        <div className='flex flex-col font-medium'>
          <div>
            <Link
              href={`/search/${replaceAndRemoveChar(
                product.location?.city
              )}`}
              className=' no-underline text-[#222] text-lg hover:underline'
              onClick={deleteItemFromLocalStorage}
            >
              {product.location?.city}
            </Link>
          </div>

          <div>
            <Link
              href={`/search/${replaceAndRemoveChar(
                product.location?.state
              )}`}
              className='no-underline text-[#222] text-lg hover:underline'
              onClick={deleteItemFromLocalStorage}
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
              <div
                className='py-2.5 px-5 rounded-lg border border-[#20b04b] text-[#20b04b] bg-[#e8ffef] font-medium flex items-center justify-center  cursor-pointer hover:shadow-md	'
                style={{}}
                key={brandValue}
                onClick={() =>
                  router.push(
                    `/search/${replaceAndRemoveChar(brandValue)}`
                  )
                }
              >
                {brandValue}
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* Product claims */}
    {product['product/labelClaims'].length > 0 && (
      <div className='product-claims'>
        <p className='m-0 pb-2.5 text-lg font-bold'>
          Product Label Claims
        </p>
        <div className='grid grid-cols-2 gap-2.5'>
          {product['product/labelClaims'].map((productClaim) => {
            return (
              <div
                className='py-2.5 px-5 rounded-lg border border-[#ff5a16] text-[#ff5a16] bg-[#fff0ea] font-medium flex items-center justify-center  cursor-pointer hover:shadow-md'
                key={productClaim}
                onClick={() =>
                  router.push(
                    `/search/${replaceAndRemoveChar(productClaim)}`
                  )
                }
              >
                {productClaim}
              </div>
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
              <div
                className='py-2.5 px-5 rounded-lg border border-[#6E72A0] text-[#6E72A0] bg-[#eaecff] font-medium flex items-center justify-center  cursor-pointer hover:shadow-md'
                key={productAttribute}
                onClick={() =>
                  router.push(
                    `/search/${replaceAndRemoveChar(productAttribute)}`
                  )
                }
              >
                {capitalizeFirstLetter(productAttribute)}
              </div>
            );
          })}
        </div>
      </div>
    )}
  </div>
  )
}

export default ProducPageRight