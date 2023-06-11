import { skills } from "../data";
import Skill from "./Skill";
import {motion} from 'framer-motion'

type Props = {};

const Skills = (props: Props) => {
  return (
    <section id="skills" className="section">
      <h1 className="title">skills</h1>

      <p className="text-center text-secondary text-xs mt-5 uppercase">Move the mouse over the icons to see progress</p>
      <motion.div 
      initial={{x:-200,opacity:0}}
      whileInView={{x:[-190,-160,0],opacity:1}}
      transition={{duration:1.5}}
      className="grid grid-cols-4 mt-20 mx-auto max-w-[450px] gap-y-4 ">
        {skills.slice(0, 8).map((el) => (
         <Skill key={el.id} img={el.img} level={el.level} name={el.name} />
        ))}
      </motion.div>
      <motion.div
      initial={{x:200,opacity:0}}
      whileInView={{x:[190,160,0],opacity:1}}
      transition={{duration:1.5}}
       className="grid grid-cols-4 mt-4 mx-auto max-w-[450px] gap-y-4 ">
        {skills.slice(8, 16).map((el) => (
         <Skill key={el.id} img={el.img} level={el.level} name={el.name} />
        ))}
      </motion.div>
      <motion.div 
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

export default Skills;
