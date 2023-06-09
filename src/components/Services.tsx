import ServiceCard from "./ServiceCard"
import {services} from '../data'

type Props = {}

const Services = (props: Props) => {
  return (
    <section id='services ' className='section px-8 flex flex-col items-center pb-4'>
<h1 className='title'>services</h1>
<div className=' overflow-x-scroll flex flex-1 snap-x snap-mandatory w-full ' >
{services.map(el=><ServiceCard key={el.id} title={el.title} services={el.services} lottie={el.lottie} images={el.images || []} />)}
</div>

    </section>
  )
}

export default Services