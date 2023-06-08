import {Cursor,useTypewriter} from 'react-simple-typewriter'
import Circles from './Circles'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
const [text,count] = useTypewriter({
    words:["Hi, I'm Ammar","Full-stack developer","React native cross platform developer"],
    loop:true,
    delaySpeed:2000,
    deleteSpeed:35
    
})


  return (
    <section id="hero" className='flex-1 flex items-center flex-col justify-center '>
        <Circles />
        <img src={'/images/logo.png'}  width={125} height={125} alt='logo' className='-mt-12'/>
        <h1 className='text-xl font-semibold max-w-[300px] min-h-[75px] text-center'>{text}<Cursor cursorColor='#DB0000' /></h1>
    </section>
  )
}

export default Hero