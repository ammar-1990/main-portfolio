import { useRouter } from "next/router"


import { useEffect, useState } from "react"

type Props = {theHash:string}

const Navigator = ({theHash}: Props) => {
const [scroll,setScroll] = useState(false)
    const router = useRouter()

  





  return (
    <div className={`${theHash !== '' && "opacity-100 pointer-events-auto"} delay-300 opacity-0 pointer-events-none duration-500 fixed top-5 w-fit px-8 py-4 bg-[rgb(36,36,36)]/40 text-white mx-auto flex items-center gap-4 left-0 right-0`}>
<span className={`${theHash === '' && 'text-red-500'}`}>hero</span>
<span className={`${theHash === 'about' && 'text-red-500'}`}>about</span>
<span className={`${theHash === 'services' && 'text-red-500'}`}>services</span>
<span className={`${theHash === 'skills' && 'text-red-500'}`}>skills</span>
<span className={`${theHash === 'certifications' && 'text-red-500'}`}>certifications</span>
<span className={`${theHash === 'projects' && 'text-red-500'}`}>projects</span>
<span className={`${theHash === 'contact' && 'text-red-500'}`}>contact</span>
    </div>
  )
}

export default Navigator