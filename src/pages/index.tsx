import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className='snap-y snap-mandatory bg-[rgb(36,36,36)]  text-white overflow-y-scroll overflow-x-hidden'>


    <Head>
      <title>
        Ammar | Portfolio
      </title>
      <link rel='icon' href='/images/logo.png' />
    </Head>

<div className='flex flex-col min-h-screen snap-center'>
    {/* Header */}
    <Header />

{/* hero */}
<Hero />

</div>


    </div>
  )
}
