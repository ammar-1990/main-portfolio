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
import Navigator from '@/components/Navigator'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const [theHash,setTheHash] = useState('')




  return (
  <div className='snap-y snap-mandatory  bg-[rgb(36,36,36)] h-screen  text-white overflow-y-scroll overflow-x-hidden scroll-smooth myScroll'>
  <Toaster />
<Navigator theHash={theHash} />
    <Head>
      <title>
        Ammar | Portfolio
      </title>
      <link rel='icon' href='/images/logo.png' />
    </Head>

   {/* Header */}
   <Header />

{/* hero */}
<Hero setTheHash={setTheHash} />


{/* about */}
<About setTheHash={setTheHash}  />

{/* services */}
<Services setTheHash={setTheHash}  />

{/* skills */}
<Skills setTheHash={setTheHash}  />

{/* certifications */}

<Certifications  setTheHash={setTheHash} />


{/* projects */}
<div className='relative'>
<Projects setTheHash={setTheHash}  />
<div className="absolute w-screen top-[35%]  bg-main/10 h-[300px] -skew-y-12" />
</div>


{/* contact */}
<Contact setTheHash={setTheHash} />




    </div>
  )
}
