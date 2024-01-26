
import Link from 'next/link';
import Ingredients from '../_components/ingredients';
const ProductPageLeft = ({ product }) => {
  return (
    <div className='flex flex-col gap-2.5 w-[40%] max-[750px]:w-full'>
      {/* Product's brand logo */}
      <div className='w-[40%] h-[12vh]'>
        <img
          className='w-full h-full object-contain'
          src={product.logoURL}
          alt='brand-logo'
        />
      </div>
      {/* Product title */}
      <h2 className='m-0 text-2xl font-black leading-none mt-2.5'>
        {product.productTitle.toUpperCase()}
      </h2>
      {/* Product image */}
      <div className='max-w-[80%] h-[65vh] rounded-2xl max-[970px]:w-[100%] max-[750px]:w-[60%] flex items-start justify-start'>
        {/* <div className='w-[70%] h-[60vh] rounded-2xl border-[1.5px] border-[#20b04b]'> */}
        <img
          className='w-full h-full object-cover rounded-xl'
          src={product.imageURL}
          alt='product-img'
        />
      </div>

      <Ingredients productIngredients={product.ingredients} />
      {/* Product buy pages links */}
      <div className='click-to-buy'>
        <h2 className='m-0 mt-5 italic text-xl font-semibold text-[#20b04b]'>
          Click below to buy:
        </h2>
        <div style={{ display: 'inline-block' }}>
          <Link
            href={product.productURL}
            target='_blank'
            className='product-link'
          >
            <div className='w-[140px] h-[70px]'>
              <img
                className='w-full h-full object-contain'
                src={product.logoURL}
                alt='brand-logo'
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPageLeft;
