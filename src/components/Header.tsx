import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className='fixed top-0 flex items-start justify-between max-w-6xl left-1/2 -translate-x-[50%] z-20 p-5 w-full'>
        <motion.nav 
        initial={{x:-500,opacity:0,scale:0.5}} 
        animate={{x:0,opacity:1,scale:1}}
        transition={{duration:1.5}}
        className='flex items-center'>
            <SocialIcon url='https://github.com/ammar-1990' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.linkedin.com/in/ammar-haidar-569344223' fgColor='gray' bgColor='transparent'/>
         
        </motion.nav>
        <motion.div
        initial={{x:500,opacity:0,scale:0.5}}
        animate={{x:0,opacity:1,scale:1}}
        transition={{duration:1.5}}
        className='flex items-center'>
        <SocialIcon network='email' fgColor='gray' bgColor='transparent' className='cursor-pointer'/>
        <p className='uppercase text-secondary hidden sm:block text-sm'>Get in touch</p>
        </motion.div>
    </header>
  )
}

export default Header