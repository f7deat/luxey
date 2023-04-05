import Head from 'next/head'
import Header from '@/components/header'
import Product from '@/components/product'
import Collapse from '@/components/collapse'
import Search from '@/components/input/search'
import Checkbox from '@/components/input/checkbox'
import LuxeyRangeSlider from '@/components/input/ranger'
import { Breadcrumb, Jumbotron, Pagination, ImageBox, Footer } from '@/components'
import { CloseIcon, FiltersIcon, USFlagIcon } from '@/icons'
import { useState } from 'react'

export default function Home() {

  const bags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

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

        <div className='container mx-auto py-6 px-4'>
          <div className='overflow-auto scrollbar-hide'>
            <div className='flex md:gap-6 gap-4 justify-center'>
              <ImageBox title='Birkin' />
              <ImageBox title='Kelly' />
              <ImageBox title='Constance' />
              <ImageBox title='Evelyne' />
              <ImageBox title='Picotin' />
              <ImageBox title='Lindy' />
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4'>
          <Breadcrumb />
        </div>

        <div className='container mx-auto px-4'>

          <div className='md:flex gap-10'>
            <div className='md:w-1/4 mb-10'>
              <div className='text-gray-500 mb-2'>
                655 results
              </div>
              <Search />
              <div className='opacity-25 fixed top-0 left-0 bottom-0 right-0 z-10 bg-gray-900 md:hidden' hidden={!sidebarOpen}></div>
              <div className={ sidebarOpen ? 'md:block fixed w-64 md:w-full md:relative' : 'hidden md:block'} id="sidebar">
                <div className='flex items-center justify-between md:hidden border-b py-4'>
                  <div className='text-3xl'>Filters</div>
                  <button onClick={() => setSidebarOpen(false)}>
                    <CloseIcon />
                  </button>
                </div>
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
                  <LuxeyRangeSlider />
                </Collapse>
              </div>

            </div>
            <div className='md:w-3/4 mb-10'>

              <div className='flex md:justify-end justify-between gap-4 mb-6'>
                <button className='px-4 py-2 border hover:border-gray-900 flex gap-2'>
                  <USFlagIcon className='w-6 h-6' />
                  <span>USD</span>
                </button>
                <div className='flex gap-2'>
                  <button className='px-4 py-2 border hover:border-gray-900 flex gap-2' onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <span>Filters</span>
                    <FiltersIcon />
                  </button>
                  <button className='px-4 py-2 border hover:border-gray-900 md:block hidden'>Sort by</button>
                  <button className='h-10 w-10 flex items-center justify-center border border-gray-900'>
                    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 22h-7.303a.75.75 0 0 1-.75-.75v-7.303a.75.75 0 0 1 .75-.75h7.303a.75.75 0 0 1 .75.75v7.303a.75.75 0 0 1-.75.75Zm-6.553-1.5H20.5v-5.803h-5.803V20.5ZM10.053 22H2.75a.75.75 0 0 1-.75-.75v-7.303a.75.75 0 0 1 .75-.75h7.303a.75.75 0 0 1 .75.75v7.303a.75.75 0 0 1-.75.75ZM3.5 20.5h5.803v-5.803H3.5V20.5ZM21.25 10.803h-7.303a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 .75-.75h7.303a.75.75 0 0 1 .75.75v7.303a.75.75 0 0 1-.75.75Zm-6.553-1.5H20.5V3.5h-5.803v5.803ZM10.053 10.803H2.75a.75.75 0 0 1-.75-.75V2.75A.75.75 0 0 1 2.75 2h7.303a.75.75 0 0 1 .75.75v7.303a.75.75 0 0 1-.75.75ZM3.5 9.303h5.803V3.5H3.5v5.803Z" /></svg>
                  </button>
                  <button className='h-10 w-10 flex items-center justify-center border hover:border-gray-900'>
                    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 22H10.03a.75.75 0 0 1-.75-.75v-3.895a.75.75 0 0 1 .75-.75h11.22a.75.75 0 0 1 .75.75v3.895a.75.75 0 0 1-.75.75Zm-10.47-1.5h9.72v-2.395h-9.72V20.5ZM6.645 22H2.75a.75.75 0 0 1-.75-.75v-3.895a.75.75 0 0 1 .75-.75h3.895a.75.75 0 0 1 .75.75v3.895a.75.75 0 0 1-.75.75ZM3.5 20.5h2.395v-2.395H3.5V20.5ZM21.25 14.697H10.03a.75.75 0 0 1-.75-.75v-3.894a.75.75 0 0 1 .75-.75h11.22a.75.75 0 0 1 .75.75v3.894a.75.75 0 0 1-.75.75Zm-10.47-1.5h9.72v-2.394h-9.72v2.393ZM6.645 14.697H2.75a.75.75 0 0 1-.75-.75v-3.894a.75.75 0 0 1 .75-.75h3.895a.75.75 0 0 1 .75.75v3.894a.75.75 0 0 1-.75.75Zm-3.145-1.5h2.395v-2.394H3.5v2.393ZM21.25 7.395H10.03a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 .75-.75h11.22a.75.75 0 0 1 .75.75v3.895a.75.75 0 0 1-.75.75Zm-10.47-1.5h9.72V3.5h-9.72v2.395ZM6.645 7.395H2.75a.75.75 0 0 1-.75-.75V2.75A.75.75 0 0 1 2.75 2h3.895a.75.75 0 0 1 .75.75v3.895a.75.75 0 0 1-.75.75ZM3.5 5.895h2.395V3.5H3.5v2.395Z" /></svg>
                  </button>
                </div>
              </div>

              <div className='grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-4 mb-10'>
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
