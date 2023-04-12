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
          <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed md:py-10 py-4 px-4' style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}>
            <div className='container flex-col px-4 mx-auto items-center flex justify-center h-full rounded-lg' style={{
              backgroundColor: '#eff2f7'
            }}>
              <div className={elsie.className} style={{
                fontSize: 64
              }}>
                LUXEY
              </div>
              <div className={`md:text-xl md:w-1/2 ${inter.className}`}>
                Introducing LuxeLife, the premier personalized recommendation app for luxury items and experiences. Our AI-driven platform curates bespoke suggestions tailored to your refined tastes. Explore high-end fashion, exquisite jewelry, rare cars, and lavish vacations through our expert-curated rankings. LuxeLife: Elevate your lifestyle with personalized luxury at your fingertips.
              </div>
              <div className='border-b border-gray-800 md:w-96 w-40 mt-1'></div>
              {/* <div className={`text-lg uppercase ${inter.className}`}>Notify me when its ready</div> */}
              {/* <input placeholder='Enter your email' className='text-gray-800 text-xl px-6 py-2 rounded bg-white shadow-lg md:w-96' type='text' style={inter.style} />
              <button type='button' className='border border-white uppercase px-8 py-2 rounded shadow-lg hover:bg-white hover:text-gray-900 flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  <span className='text-lg font-medium' onClick={onSubmit} style={inter.style}>Submit</span>
              </button> */}
              <iframe src="https://0af68bac.sibforms.com/serve/MUIEAO5z5w15UTSz-UjWWDi8bbqXt5XomeuoUNyIr-Hi1CjEY5D9hyUmwGlVQxkQWIOTHMKYenL9DHu60Bcv9jtgdneWm4iVIqDFEJg5JmU_1kCpE-ARnrNgmhphsMaYB3P3EVrPrlCjHQu8nCe4E6553D9H5N_qNZdRZTMVD1W2vMNojaeDpWnzkeCss7ZiYjV7Wa7W_mob4USt" style={{border: 'none', width: '100%', minHeight: '400px'}} />

            </div>

          </div>
        </div>
      </main>
    </>
  )
}
