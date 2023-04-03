import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Jumbotron from '@/components/jumbotron'
import ImageBox from '@/components/image-box'
import Breadcrumb from '@/components/breadcrumb'
import Product from '@/components/product'
import Footer from '@/components/footer'
import Pagination from '@/components/pagination'
import Collapse from '@/components/collapse'
import Search from '@/components/input/search'
import Checkbox from '@/components/input/checkbox'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const bags = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Head>
        <title>Luxey</title>
        <meta name="description" content="Luxey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-white">
        <div className='container mx-auto'>
          <Jumbotron />
        </div>

        <div className='container mx-auto py-6 px-20'>
          <div className='grid grid-cols-6 gap-6'>
            <ImageBox title='Birkin' />
            <ImageBox title='Kelly' />
            <ImageBox title='Constance' />
            <ImageBox title='Evelyne' />
            <ImageBox title='Picotin' />
            <ImageBox title='Lindy' />
          </div>
        </div>

        <div className='container mx-auto'>
          <Breadcrumb />
        </div>

        <div className='container mx-auto'>
          <div className='flex justify-end gap-4 mb-6'>
            <button className='px-4 py-2 border hover:border-gray-900'>USD</button>
            <button className='px-4 py-2 border hover:border-gray-900'>Hide Filters</button>
            <button className='px-4 py-2 border hover:border-gray-900'>Sort by</button>
            <button className='h-10 w-10 flex items-center justify-center border border-gray-900'>
              <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 22h-7.303a.75.75 0 0 1-.75-.75v-7.303a.75.75 0 0 1 .75-.75h7.303a.75.75 0 0 1 .75.75v7.303a.75.75 0 0 1-.75.75Zm-6.553-1.5H20.5v-5.803h-5.803V20.5ZM10.053 22H2.75a.75.75 0 0 1-.75-.75v-7.303a.75.75 0 0 1 .75-.75h7.303a.75.75 0 0 1 .75.75v7.303a.75.75 0 0 1-.75.75ZM3.5 20.5h5.803v-5.803H3.5V20.5ZM21.25 10.803h-7.303a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 .75-.75h7.303a.75.75 0 0 1 .75.75v7.303a.75.75 0 0 1-.75.75Zm-6.553-1.5H20.5V3.5h-5.803v5.803ZM10.053 10.803H2.75a.75.75 0 0 1-.75-.75V2.75A.75.75 0 0 1 2.75 2h7.303a.75.75 0 0 1 .75.75v7.303a.75.75 0 0 1-.75.75ZM3.5 9.303h5.803V3.5H3.5v5.803Z" /></svg>
            </button>
            <button className='h-10 w-10 flex items-center justify-center border hover:border-gray-900'>
              <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 22H10.03a.75.75 0 0 1-.75-.75v-3.895a.75.75 0 0 1 .75-.75h11.22a.75.75 0 0 1 .75.75v3.895a.75.75 0 0 1-.75.75Zm-10.47-1.5h9.72v-2.395h-9.72V20.5ZM6.645 22H2.75a.75.75 0 0 1-.75-.75v-3.895a.75.75 0 0 1 .75-.75h3.895a.75.75 0 0 1 .75.75v3.895a.75.75 0 0 1-.75.75ZM3.5 20.5h2.395v-2.395H3.5V20.5ZM21.25 14.697H10.03a.75.75 0 0 1-.75-.75v-3.894a.75.75 0 0 1 .75-.75h11.22a.75.75 0 0 1 .75.75v3.894a.75.75 0 0 1-.75.75Zm-10.47-1.5h9.72v-2.394h-9.72v2.393ZM6.645 14.697H2.75a.75.75 0 0 1-.75-.75v-3.894a.75.75 0 0 1 .75-.75h3.895a.75.75 0 0 1 .75.75v3.894a.75.75 0 0 1-.75.75Zm-3.145-1.5h2.395v-2.394H3.5v2.393ZM21.25 7.395H10.03a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 .75-.75h11.22a.75.75 0 0 1 .75.75v3.895a.75.75 0 0 1-.75.75Zm-10.47-1.5h9.72V3.5h-9.72v2.395ZM6.645 7.395H2.75a.75.75 0 0 1-.75-.75V2.75A.75.75 0 0 1 2.75 2h3.895a.75.75 0 0 1 .75.75v3.895a.75.75 0 0 1-.75.75ZM3.5 5.895h2.395V3.5H3.5v2.395Z" /></svg>
            </button>
          </div>

          <div className='md:flex gap-10'>
            <div className='md:w-1/4 mb-10'>
              <div className='text-gray-500 mb-2'>
                655 results
              </div>
              <Search />
              <Collapse title="HANDBAG STYLE">
                <Search />
                <Checkbox label='24/24 (4)' />
                <Checkbox label='Birkin (82)' />
                <Checkbox label='Bolide (22)' />
              </Collapse>
              <Collapse title="HANDBAG TYPE">
                <Search />
                <Checkbox label='Accessory (92)' />
                <Checkbox label='Backpack (15)' />
                <Checkbox label='Belt Bag (1)' />
              </Collapse>
              <Collapse title="PRICE">
                <RangeSlider />
              </Collapse>

            </div>
            <div className='md:w-3/4 mb-10'>
              <div className='md:grid grid-cols-3 gap-10 mb-10'>
                {
                  bags.map(bag => <Product key={bag} />)
                }
              </div>
              <Pagination />
            </div>
          </div>

        </div>
        <Footer />
      </main>
    </>
  )
}