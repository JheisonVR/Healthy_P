import Image from "next/image";
import Link from "next/link"
// import { IoNotificationsCircleOutline, IoPersonCircle } from "react-icons/io5"

export const TopBar = () => {

  return (
    <nav className="flex px-5 justify-between items-center w-full bg-violet-200 h-9 rounded-sm text-black ">
        {/* Logo */}
        <div className="flex">
            <Link href='/' className="flex justify-center items-center "> 
              <Image
                src='/imgs/Logo Healthy_P.png'
                width={80}
                height={80}
                alt="logo_Healthy_P"
              ></Image>
              <span className="antialiased font-bold">Healthy</span>
              <span className="font-bold text-indigo-600"> | P</span>
             </Link>
        </div>
        <div className=" flex" >
          <Link className="m-2 p-2 rounded-md font-semibold transition-all hover:bg-gray-100" href='/survey/daily'>Survey</Link>
          <Link className="m-2 p-2 rounded-md font-semibold transition-all hover:bg-gray-100" href='/daily-survey'>Calendar</Link>
        </div>
        <div className="flex items-center" >
          {/* <Link href='#' className="mx-2">
            <IoNotificationsCircleOutline/>
          </Link>
          <Link href='#' className="mx-2">
            <IoPersonCircle/>
          </Link> */}
          <Link
            href='/auth/login'
          >

            <button
              className="cursor-pointer text-white font-bold relative text-[14px] w-[5em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[10px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
            >
              Login
            </button>

          </Link>
          {/* <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
            Menu
          </button> */}
        </div>
    </nav>
  )
}

