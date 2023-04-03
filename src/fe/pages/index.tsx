import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Jumbotron from '@/components/jumbotron'
import ImageBox from '@/components/image-box'
import Breadcrumb from '@/components/breadcrumb'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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

      </main>
    </>
  )
}
