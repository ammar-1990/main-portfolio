import { projects } from "@/data"
import Project from "./Project"

type Props = {}

const Projects = (props: Props) => {
  return (
    <section  id='projects' className='section relative flex flex-col pb-5 px-3'>

      <h1 className='title'>projects</h1>
      <div className=' overflow-x-scroll flex flex-1 snap-x snap-mandatory w-full mt-8 gap-12 pb-3 myScrollTwo px-4'>
{[...projects].reverse().map((el,i)=><Project key={el.id} order={i+1} name={el.name} img={el.img}  overView={el.overView} demo={el.demo} code={el.code} pull={el.pull} techStack={el.techStack} length={projects.length}/>)}
      </div>
    </section>
  )
}

export default Projects