import {Cursor,useTypewriter} from 'react-simple-typewriter'
import Circles from './Circles'
import Image from 'next/image'
import Link from 'next/link'
import {  useEffect } from 'react'
import {useIntersectionObserver} from '../hooks/useIntersecting'
import React from "react";
type Props = {

setTheHash:React.Dispatch<React.SetStateAction<string>>
}

const Hero = ({setTheHash}: Props) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });


  useEffect(()=>{
    if(isIntersecting)
  {  window.history.replaceState(null, "", window.location.pathname)
    setTheHash('')}
  },[isIntersecting])

const [text,count] = useTypewriter({
    words:["Hi, I'm Ammar","Full-stack developer","React native cross platform developer","Block-chain Developer "],
    loop:true,
    delaySpeed:2000,
    deleteSpeed:35
    
})


  return (
    <section ref={ref}  id="hero" className='h-screen  flex items-center flex-col justify-center  snap-center relative overflow-hidden'>
        <Circles />
        <Image src={'/images/logo.png'} width={300} height={250}   priority={true}  alt='logo' className=' w-[75px] md:w-[125px] mt-32'/>
        <h2 className='mt-4 text-secondary tracking-[15px] uppercase text-xs sm:text-base -mr-[15px]'>Web Developer</h2>
        <h1 className='text-sm md:text-2xl z-10 font-bold max-w-[350px] min-h-[75px] text-center mt-4'>{text}<Cursor cursorColor='#DB0000' /></h1>
        <div className='z-10 flex justify-center flex-wrap '>
          <Link href={'#about'}><button type='button' className='heroButton '>About</button></Link>  
       <Link  href={'#services'}>  <button type='button' className='heroButton '>Services</button></Link>   
       <Link href={'#skills'}> <button type='button' className='heroButton '>Skills</button></Link>    
       <Link href={'#certifications'}> <button type='button' className='heroButton '>Certifications</button></Link>    
       <Link href={'#projects'}><button type='button' className='heroButton '>Projects</button></Link>     
       <Link href={'#contact'}><button type='button' className='heroButton '>Contact</button></Link>     
        </div>
    </section>
  )
}

export default React.memo(Hero)