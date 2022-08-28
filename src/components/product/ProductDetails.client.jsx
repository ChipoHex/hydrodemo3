const incentives = [
  {
    name: 'Free delivery',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: '10-year warranty',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
   
  },
  {
    name: 'Free Exchanges',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
   
  },
  {
    name: '24/7 support',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
]




import {
  flattenConnection,
  useProduct,
  useParsedMetafields,
  ProductProvider,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
  BuyNowButton,
} from '@shopify/hydrogen/client';
import ProductOptions from './ProductOptions.client';
import Accordion from './Accordion';
import Reviews from './Reviews';
import Gallery from './Gallery.client';


function AddToCartMarkup() {
  const {selectedVariant} = useProduct();
  const isOutOfStock = !selectedVariant.availableForSale;

  return (
    <div className="space-y-2 my-8">
=      <button type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://google.com';
      }} 
      
      className=" flex font-sans font-semibold block m-0 w-full items-center justify-center uppercase font-lg text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700 rounded-full">               <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 30 30' stroke-width='2.5' stroke='currentColor' class='w-6 h-6 mt-1 mr-1'><path stroke-linecap='round' stroke-linejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' /></svg>Buy now</button>
    </div>
  );
}

function SizeChart() {
  return (
    <>
      <h3
        className="text-xl text-black font-semibold mt-8 mb-4"
        id="size-chart"
      >
        Size Chart
      </h3>

      <table className="min-w-full table-fixed text-sm text-center bg-white">
        <thead>
          <tr className="bg-secondary text-white">
            <th className="w-1/4 py-2 px-4 font-normal">Board Size</th>
            <th className="w-1/4 py-2 px-4 font-normal">154</th>
            <th className="w-1/4 py-2 px-4 font-normal">158</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border border-secondary">Weight Range</td>
            <td className="p-3 border border-secondary">
              120-180 lbs. /54-82kg
            </td>
            <td className="p-3 border border-secondary">
              150-200 lbs. /68-91 kg
            </td>
          </tr>
          <tr>
            <td className="p-3 border border-secondary">Waist Width</td>
            <td className="p-3 border border-secondary">246mm</td>
            <td className="p-3 border border-secondary">255mm</td>
          </tr>
          <tr>
            <td className="p-3 border border-secondary">Stance Width</td>
            <td className="p-3 border border-secondary">-40</td>
            <td className="p-3 border border-secondary">-40</td>
          </tr>
          <tr>
            <td className="p-3 border border-secondary">Binding Sizes</td>
            <td className="p-3 border border-secondary">
              Men&rsquo;s S/M, Women&rsquo;s S/M
            </td>
            <td className="p-3 border border-secondary">
              Men&rsquo;s L, Women&rsquo;s L
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default function ProductDetails({product}) {
  const initialVariant = flattenConnection(product.variants)[0];

  const productMetafields = useParsedMetafields(product.metafields);
  const sizeChartMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' && metafield.key === 'size_chart',
  );
  const sustainableMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' && metafield.key === 'sustainable',
  );
  const lifetimeWarrantyMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' &&
      metafield.key === 'lifetime_warranty',
  );

  
  return (
    <>
      <ProductProvider data={product} initialVariantId={initialVariant.id}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-x-8 my-13">
          <div className="md:hidden mt-5 mb-8">
            <ProductTitle
              as="h1"
              className="text-3xl font-bold text-black mb-4 font-sans"
            />
            {product.vendor && (
              <div className="text-sm font-medium mb-2 text-gray-900">
                {product.vendor}
              </div>
            )}
            <span />

            <div className="absolute right-5 flex items-center">
      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      <p className="ml-2 text-md font-bold font-sans text-gray-900">4.6</p>
      <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full" />
      <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline">273 reviews</a>
    </div>


            <div className="flex justify-between md:block">
             
              <ProductPrice
                className="text-gray-900 text-2xl font-semibold font-sans"
                variantId={initialVariant.id}
              />
            </div>
          </div>

          <Gallery />

          <div>
            <div className="hidden md:block">
              <ProductTitle
                as="h1"
                className="text-5xl font-bold text-black my-4"
              />
              {product.vendor && (
                <div className="text-sm font-medium mb-2 text-secondary">
                  {product.vendor}
                </div>
              )}
            </div>
            {/* Product Options */}
            <div className="mt-8">
              <ProductOptions />
              {sizeChartMetafield?.value && (
                <a
                  href="#size-chart"
                  className="block underline text-gray-500 text-sm tracking-wide my-6"
                >
                  Size Chart
                </a>
              )}
              <AddToCartMarkup />
              {sustainableMetafield?.value && (
                <span className="flex items-center mb-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current text-blue-600 mr-3"
                  >
                    <path
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.7071-.7071M6.34315 6.34315l-.70711-.70711m12.72796.00005-.7071.70711M6.3432 17.6569l-.70711.7071M16 12c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-gray-900 font-medium">
                    Sustainable Material
                  </span>
                </span>
              )}
              {lifetimeWarrantyMetafield?.value && (
                <span className="flex items-center mb-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current text-blue-600 mr-3"
                  >
                    <path
                      d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-gray-900 font-medium">
                    Lifetime Warranty
                  </span>
                </span>
              )}
            </div>


            <Accordion />


            <div className="bg-gray-50">
      <div className="max-w-xl mx-auto px-4">
        <div className="flex flex-wrap items-center	">
          {incentives.map((incentive) => (
            <div className="my-2 px-5 w-1/2 overflow-hidden"key={incentive.name}>
              <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 text-center">{incentive.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  

<Reviews />
  
            
            {/* Product Description */}
   


          </div>
       
       

        
    
  
        </div>
        
      </ProductProvider>
    </>
  );
}
