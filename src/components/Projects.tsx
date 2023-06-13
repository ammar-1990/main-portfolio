import { projects } from "@/data"

import { RefObject, Suspense, useEffect } from "react"
import {useIntersectionObserver} from '../hooks/useIntersecting'
import dynamic from "next/dynamic"
import React from "react";

const Project = dynamic(()=>import('./Project'))
type Props = { setTheHash:React.Dispatch<React.SetStateAction<string>> }

const Projects = ({setTheHash}: Props) => {

  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.9 });




  useEffect(()=>{
    if(isIntersecting)
   { window.history.pushState(null, "", `#projects`);
    setTheHash('projects')}
  },[isIntersecting])

  return (
    <section  ref={ref} id='projects' className='section relative flex flex-col pb-5 px-3'>

      <h1 className='title'>projects</h1>
      <div className=' overflow-x-scroll flex flex-1 snap-x snap-mandatory w-full mt-8 gap-12 pb-3 myScrollTwo px-4'>
{[...projects].reverse().map((el,i)=><Suspense key={el.id} fallback={'loading'}><Project  order={i+1} name={el.name} img={el.img}  overView={el.overView} demo={el.demo} code={el.code} pull={el.pull} techStack={el.techStack} length={projects.length}/></Suspense>)}
      </div>
    </section>
  )
}

export default React.memo(Projects)