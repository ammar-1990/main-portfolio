import ServiceCard from "./ServiceCard"
import {services} from '../data'
import {useIntersectionObserver} from '../hooks/useIntersecting'
import { useEffect } from "react"

type Props = { setTheHash:React.Dispatch<React.SetStateAction<string>> }

const Services = ({setTheHash}: Props) => {


  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });


  useEffect(()=>{
    if(isIntersecting)
   { window.history.pushState(null, "", `#services`);
    setTheHash('services')}
  },[isIntersecting])


  return (
    <section ref={ref} id='services' className='section px-5 flex flex-col items-center pb-4'>
<h1 className='title'>services</h1>
<div className=' overflow-x-scroll flex flex-1 snap-x snap-mandatory w-full mt-8 gap-6 pb-3 myScrollTwo' >
{services.map(el=><ServiceCard key={el.id} title={el.title} services={el.services} lottie={el.lottie} images={el.images || []} small={el.small}/>)}
</div>

    </section>
  )
}

export default Services