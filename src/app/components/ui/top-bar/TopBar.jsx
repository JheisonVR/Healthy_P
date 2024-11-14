import Image from "next/image";
import Link from "next/link"
import { IoNotificationsCircleOutline, IoPersonCircle } from "react-icons/io5"

export const TopBar = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full bg-slate-200 ">
        {/* Logo */}
        <div>
            <Link href='#' className="flex justify-center items-center "> 
              <Image
                src='/imgs/logowbg.png'
                width={30}
                height={30}
                alt="logo_Healthy_P"
              ></Image>
              <span className="antialiased font-bold">Healthy</span>
              <span className="font-bold text-indigo-600"> | P</span>
             </Link>
        </div>
        <div className=" hidden sm:block" >
          <Link className="m-2 p-2 rounded-md font-semibold transition-all hover:bg-gray-100" href='/daily-survey'>Survey</Link>
          <Link className="m-2 p-2 rounded-md font-semibold transition-all hover:bg-gray-100" href='/daily-survey'>Calendar</Link>
        </div>
        <div className="flex items-center" >
          <Link href='#' className="mx-2">
            <IoNotificationsCircleOutline/>
          </Link>
          <Link href='#' className="mx-2">
            <IoPersonCircle/>
          </Link>
          <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
            Menu
          </button>
        </div>
    </nav>
  )
}

