import Image from "next/image";
import {motion} from 'framer-motion'
type Props = {
    name:string,
    icon:string,
    image:string,
    link:string,
    
}
import Link from 'next/link'
const Certificate = ({name,icon,image,link}: Props) => {
  return (
    <motion.div 
    initial={{opacity:0.1}}
    whileInView={{opacity:1}}
    transition={{duration:0.4,delay:0.4}}
    className="w-full flex-shrink-0 snap-center flex items-center justify-center ">
<Link href={link} target='_blank'><div className="bg-[rgb(36,36,36)] p-2 rounded-md relative cursor-pointer group active:scale-[0.99] duration-300">
    <div className='absolute inset-0 bg-main opacity-0 group-hover:opacity-90 flex items-center justify-center rounded-md duration-[0.3s] ease-in-out '>
        <p className='text-white font-semibold'>More info</p>
    </div>
    <div className="absolute w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-full -top-2 -left-2">  <img src={icon} className="w-full h-full object-contain "  alt='certificate'/></div>
  
    <Image src={image} alt="certificate" priority  className=" w-[350px] md:w-[500px] aspect-video object-cover rounded-md " width={400} height={200} />


</div>
</Link>
    </motion.div>
  )
}

export default Certificate