
import {motion} from 'framer-motion'
type Props = {}

const Circles = (props: Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={{duration:2.5}}

    className="flex justify-center items-center absolute " >
        <div className="w-[100px] h-[100px]  md:w-[200px] md:h-[200px] border border-[#333333] rounded-full animate-ping absolute"/>
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-[#333333] rounded-full  absolute" />
        <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-[#333333] rounded-full  absolute" />
        <div className="w-[450px] h-[450px]  rounded-full border absolute border-main opacity-20 md:h-[600px] md:w-[600px] animate-pulse"/>
        <div className="w-[550px] h-[550px] md:w-[700px] md:h-[700px] border border-[#333333] rounded-full  absolute" />
    </motion.div>
  )
}

export default Circles