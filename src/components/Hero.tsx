import {Cursor,useTypewriter} from 'react-simple-typewriter'
import Circles from './Circles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
const [text,count] = useTypewriter({
    words:["Hi, I'm Ammar","Full-stack developer","React native cross platform developer"],
    loop:true,
    delaySpeed:2000,
    deleteSpeed:35
    
})


  return (
    <section id="hero" className='h-screen  flex items-center flex-col justify-center pt-56 snap-center'>
        <Circles />
        <img src={'/images/logo.png'}  alt='logo' className='-mt-12 w-[75px] md:w-[125px]'/>
        <h2 className='mt-4 text-secondary tracking-[15px] uppercase text-xs sm:text-base'>Web Developer</h2>
        <h1 className='text-sm md:text-2xl z-10 font-bold max-w-[350px] min-h-[75px] text-center mt-4'>{text}<Cursor cursorColor='#DB0000' /></h1>
        <div className='z-10  pt-5'>
          <Link href={'#about'}><button type='button' className='heroButton'>About</button></Link>  
       <Link  href={'#services'}>  <button type='button' className='heroButton'>Services</button></Link>   
       <Link href={'#skills'}> <button type='button' className='heroButton'>Skills</button></Link>    
       <Link href={'#projects'}><button type='button' className='heroButton'>Projects</button></Link>     
        </div>
    </section>
  )
}

export default Hero