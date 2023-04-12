import Head from 'next/head'
import { Elsie, Inter } from 'next/font/google';
import { Space, message } from 'antd';

const elsie = Elsie({ subsets: ['latin'], weight: ['400'] })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const onSubmit = () => {
    
  }

  return (
    <>
      <Head>
        <title>Comming soon</title>
        <meta name="description" content="Introducing LuxeLife, the premier personalized recommendation app for luxury items and experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-screen h-screen'>
        <div className='relative overflow-hidden bg-cover bg-no-repeat p-12 text-center jumbotron h-full' style={{
          backgroundImage: 'url(/comming-soon.png)',
          backgroundPosition: 'top',
        }}>
          <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed' style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}>
            <div className='container flex-col gap-4 px-4 mx-auto text-white items-center flex justify-center h-full'>
              <div className={elsie.className} style={{
                fontSize: 64
              }}>
                LUXEY
              </div>
              <div className={`md:text-xl md:w-1/2 ${inter.className}`}>
                Introducing LuxeLife, the premier personalized recommendation app for luxury items and experiences. Our AI-driven platform curates bespoke suggestions tailored to your refined tastes. Explore high-end fashion, exquisite jewelry, rare cars, and lavish vacations through our expert-curated rankings. LuxeLife: Elevate your lifestyle with personalized luxury at your fingertips.
              </div>
              <div className='border-b border-white md:w-96 w-40 mt-1 mb-3'></div>
              <div className={`text-lg uppercase ${inter.className}`}>Notify me when its ready</div>
              <input placeholder='Enter your email' className='text-gray-800 text-xl px-6 py-2 rounded bg-white shadow-lg md:w-96' type='text' style={inter.style} />
              <button type='button' className='border border-white uppercase px-8 py-2 rounded shadow-lg hover:bg-white hover:text-gray-900 flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  <span className='text-lg font-medium' onClick={onSubmit} style={inter.style}>Submit</span>
              </button>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
