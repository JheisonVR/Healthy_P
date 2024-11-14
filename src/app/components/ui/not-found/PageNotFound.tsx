import Image from 'next/image'
import Link from 'next/link'

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-[800px] w=full justify-center items-center align-middle'>
        <div className='text-center px-5 mx-5'>
            <h2 className='antialiased text-9xl text-cyan-600'>404</h2>
            <p className='font-semibold text-xl' >We apologize for the inconvenience.</p>
            <p className='font-light'>
                <span>Please return</span>
                <Link href='/' className='hover:underline transition-all text-cyan-600 font-bold'> Home</Link>
            </p>
        </div>
        <div>
            <Image
                src="/imgs/Not found.jpg"
                alt='404'
                className='p-5 sm:p-0'
                height={550}
                width={550}
            />

        </div>
    </div>
  )
}
