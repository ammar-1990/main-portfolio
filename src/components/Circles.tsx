
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

    className="flex justify-center items-center relative " >
        <div className=" w-[200px] h-[200px] border border-[#333333] rounded-full animate-ping absolute"/>
        <div className=" w-[300px] h-[300px] border border-[#333333] rounded-full  absolute" />
        <div className=" w-[500px] h-[500px] border border-[#333333] rounded-full  absolute" />
        <div className="  rounded-full border absolute border-main opacity-20 h-[650px] w-[650px] animate-pulse"/>
        <div className=" w-[900px] h-[900px] border border-[#333333] rounded-full  absolute" />
    </motion.div>
  )
}

export default Circles