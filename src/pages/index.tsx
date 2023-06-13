import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Hero = dynamic(()=>import('@/components/Hero'))
const About = dynamic(()=>import('@/components/About'))
const Services = dynamic(()=>import('@/components/Services'))
const Skills = dynamic(()=>import('@/components/Skills'))
const Projects = dynamic(()=>import('@/components/Projects'))
const Certifications = dynamic(()=>import('@/components/Certifications'))
const Contact = dynamic(()=>import('@/components/Contact'))


import { Toaster } from 'react-hot-toast';
import Navigator from '@/components/Navigator'
import { useState,lazy } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const [theHash,setTheHash] = useState('')




  return (
  <div className='theMain snap-y snap-mandatory  bg-[rgb(36,36,36)] h-screen  text-white overflow-y-scroll overflow-x-hidden scroll-auto myScroll'>
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
