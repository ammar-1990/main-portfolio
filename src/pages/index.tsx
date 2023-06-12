import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import { Certificate } from 'crypto'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className='snap-y snap-mandatory  bg-[rgb(36,36,36)] h-screen  text-white overflow-y-scroll overflow-x-hidden scroll-smooth myScroll'>
  <Toaster />

    <Head>
      <title>
        Ammar | Portfolio
      </title>
      <link rel='icon' href='/images/logo.png' />
    </Head>

   {/* Header */}
   <Header />

{/* hero */}
<Hero />


{/* about */}
<About />

{/* services */}
<Services />

{/* skills */}
<Skills />

{/* certifications */}

<Certifications />


{/* projects */}
<div className='relative'>
<Projects />
<div className="absolute w-screen top-[35%]  bg-main/10 h-[300px] -skew-y-12" />
</div>


{/* contact */}
<Contact />




    </div>
  )
}
