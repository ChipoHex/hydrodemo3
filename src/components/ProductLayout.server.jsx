import {
    useShopQuery,
    flattenConnection,
    LocalizationProvider,
    CacheHours,
  } from '@shopify/hydrogen';
  import gql from 'graphql-tag';
  
  import Header from './header/Header.client';
  import Footer from './footer/Footer.server';
  import Cart from './header/Cart.client';
  import {Suspense} from 'react';
  
  /**
   * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
   */
  export default function Layout({children, hero}) {
    const {data} = useShopQuery({
      query: QUERY,
      variables: {
        numCollections: 3,
      },
      cache: CacheHours(),
      preload: '*',
    });
    const collections = data ? flattenConnection(data.collections) : null;
    const products = data ? flattenConnection(data.products) : null;
    const storeName = data ? data.shop.name : '';
  
    return (
      <LocalizationProvider preload="*">
  
        <div className="absolute top-0 left-0">
          <a
            href="#mainContent"
            className="p-4 focus:block sr-only focus:not-sr-only"
          >
            Skip to content
          </a>
        </div>
        <div className="min-h-screen max-w-screen text-gray-700 font-sans">
          {/* TODO: Find out why Suspense needs to be here to prevent hydration errors. */}
          <Suspense fallback={null}>
            <Header collections={collections} storeName={storeName} />
            <Cart />
        
          </Suspense>
          
          <main role="main" id="mainContent" className="relative bg-gray-50">
          <div class=" -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                      <div class=" w-full h-full max-w-5xl mx-auto rounded-3xl"></div>
                  </div>
            {hero}
            
            <div className="mx-auto max-w-7xl p-4 md:py-5 md:px-8">
              <Suspense fallback={null}>{children}</Suspense>
            </div>
          </main>
          <Footer collection={collections[0]} product={products[0]} />
        </div>
      </LocalizationProvider>
    );
  }
  
  const QUERY = gql`
    query layoutContent($numCollections: Int!) {
      shop {
        name
      }
      collections(first: $numCollections) {
        edges {
          node {
            description
            handle
            id
            title
            image {
              id
              url
              altText
              width
              height
            }
          }
        }
      }
      products(first: 1) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `;
  