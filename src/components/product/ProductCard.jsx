import {Suspense} from 'react';
import {Image, Link} from '@shopify/hydrogen';

import MoneyPrice from './MoneyPrice.client';
import Size from './ProductOptions.client'

/**
 * A shared component that displays a single product to allow buyers to quickly identify a particular item of interest
 */
export default function ProductCard({product}) {
  const selectedVariant = product.variants.edges[0].node;

  if (selectedVariant == null) {
    return null;
  }

  return (
    <div className="product-card max-w-md w-full shadow-lg rounded-xl p-6"  >
      <Link to={`/products/${product.handle}`}>
        <div className="rounded-lg mb-2 relative flex items-center justify-center overflow-hidden object-cover h-96">
          {selectedVariant.image ? (
            <Image
              className="bg-transparent absolute w-full h-full bg-center bg-cover object-center object-contain scale-125"
              data={selectedVariant.image}
            />
          ) : null}
          {!selectedVariant?.availableForSale && (
            <div className="absolute top-3 left-3 rounded-3xl text-xs bg-black text-white py-3 px-4">
              Out of stock
            </div>
          )}
        </div>

        <span className="text-black font-semibold mb-0.5 font-sans text-lg">{product.title}</span>

        <div className="flex ">
          
          <Suspense fallback={null}>
            <MoneyPrice money={selectedVariant.priceV2} />
          </Suspense>
        </div>
      </Link>


< Size/>
      


      <div className="flex space-x-2 text-sm font-medium pt-5 mt-3">
      <Link to='https://google.com'>
        <button className="flex text-center font-semibold uppercase transition ease-in duration-300 font-medium mb-2 md:mb-0 bg-black px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-white hover:border-black hover:text-black ">
          <span  className="font-sans pr-10 pl-2 pt-px" >Buy now</span>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 28 28' stroke-width='2' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' /></svg>

        </button>
        </Link>
        <Link to={`/products/${product.handle}`}>

        <button className="right-6 absolute transition ease-in duration-300 bg-black border border-black  shadow-lg text-white rounded-full w-9 h-9 text-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
        </Link>
      </div>
    </div>
  );
  
}
