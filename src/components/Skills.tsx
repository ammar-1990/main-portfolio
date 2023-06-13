import {useIntersectionObserver} from '../hooks/useIntersecting'
import { useEffect } from "react"
import { skills } from "../data";
import Skill from "./Skill";
import {motion} from 'framer-motion'
import React from "react";

type Props = { setTheHash:React.Dispatch<React.SetStateAction<string>>};

const Skills = ({setTheHash}: Props) => {


  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });


  useEffect(()=>{
    if(isIntersecting)
   { window.history.pushState(null, "",  `#${'skills'}`);
    setTheHash('skills')}
  },[isIntersecting])


  return (
    <section ref={ref} id="skills" className="section" >
      <h1 className="title">skills</h1>

      <p className="text-center text-secondary text-xs mt-5 uppercase">Move the mouse over the icons to see progress</p>
      <motion.div 
      viewport={{once:true}}
      initial={{x:-200,opacity:0}}
      whileInView={{x:[-190,-160,0],opacity:1}}
      transition={{duration:1.5}}
      className="grid grid-cols-4 mt-20 mx-auto max-w-[450px] gap-y-4 ">
        {skills.slice(0, 8).map((el) => (
         <Skill key={el.id} img={el.img} level={el.level} name={el.name} />
        ))}
      </motion.div>
      <motion.div
      viewport={{once:true}}
      initial={{x:200,opacity:0}}
      whileInView={{x:[190,160,0],opacity:1}}
      transition={{duration:1.5}}
       className="grid grid-cols-4 mt-4 mx-auto max-w-[450px] gap-y-4 ">
        {skills.slice(8, 16).map((el) => (
         <Skill key={el.id} img={el.img} level={el.level} name={el.name} />
        ))}
      </motion.div>
      <motion.div 
      viewport={{once:true}}
      initial={{x:-200,opacity:0}}
      whileInView={{x:[-190,-160,0],opacity:1}}
      transition={{duration:1.5}}
      className="grid grid-cols-4 mt-4 mx-auto max-w-[450px] gap-y-4 ">
        {skills.slice(16, 20).map((el) => (
         <Skill key={el.id} img={el.img} level={el.level} name={el.name} />
        ))}
      </motion.div>
    </section>
  );
};

export default React.memo(Skills);
