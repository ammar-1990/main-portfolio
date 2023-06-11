import {EnvelopeIcon} from '@heroicons/react/24/outline'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className='section px-4 flex flex-col items-center gap-5 ' id='caontact'>
        <h1 className='title'>Contact</h1>
        <h2 className='text-white font-bold capitalize mt-20 text-center'>let's build something together</h2>
        <p className='flex items-center gap-3  justify-center w-full text-xs'><EnvelopeIcon className='h-6 text-main' /> ammar.web.mobile@gmail.com</p>
        <form className='max-w-[400px] w-full mx-auto flex flex-col gap-2'>
            <div className='flex sm:gap-1 flex-col gap-2 sm:flex-row'>
            <input className='input w-full sm:w-1/2' type='text' placeholder='Name'/>
            <input className='input w-full sm:w-1/2' type='email' placeholder='Email' />
            </div>
            <input className='input' type='text' placeholder='Subject' />
            <textarea className='input resize-none h-32' placeholder='Message' />
            <button type='submit' className='py-3 bg-main rounded-md uppercase active:bg-red-900 duration-300 text-whitefont-bold' >send</button>
        
        </form>
    </section>
  )
}

export default Contact