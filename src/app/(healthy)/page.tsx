import Image from "next/image";
import Link from "next/link";
// import { FaGooglePlay } from "react-icons/fa";
// import { FaApple } from "react-icons/fa6";
// import Link from "next/link"

export default function Home(){
    return (
      <main className=" flex flex-col md:flex-row w-full h-screen justify-between items-center  ">
        <div className="flex flex-col w-4/5 md:w-2/5 mx-1 ml-9 ">
          <div className="my-2">
            <h2 className="text-5xl md:text-6xl lg:text-7xl  xl:text-8xl">Experience a fresh way to</h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-violet-600">
              follow up your emotions
            </h2>
          </div>
          <div className="my-1">
            <p className="text-wrap text-gray-700 text-lg">
              Track your emotions, set goals, and find your balance. Your daily
              well-being, simplified.
            </p>
          </div>
          <div className="flex flex-col mt-4">
            <div className="w-full flex justify-center">
              {/* <button className="my-1 mx-1 p-2 bg-violet-700 text-white rounded-xl">
                Sign up for Healthy P
              </button> */}
              <Link href='/auth/new-account'> 
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-white bg-emerald-500 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-violet-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  Sign up for Healthy P
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    // xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-white group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>

            <div className="flex justify-center mt-2">
              
              <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                <svg 
                // xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" height="24px" width="24px"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path> </g> </g></svg>
                Download
              </button>
              {/* <Link href="#">
                <button className="flex flex-col justify-center items-center my-1 mx-1 p-2 bg-black text-white rounded-xl">
                  <FaApple size={15} />
                </button>
              </Link> */}
              {/* <button className="flex flex-col justify-center items-center my-1 mx-1 p-2 bg-emerald-700 text-white rounded-xl">
                <p>Download on</p> <FaGooglePlay size={15} />
              </button> */}
            </div>
          </div>
        </div>

        <div className="md:w-2/4 mt-1 p-2 h-fit ">
          <Image
            src="/imgs/Home1.png"
            alt="smiling girl"
            height={500}
            width={750}
            className="rounded-lg shadow-lg shadow-black h-fit "
          />
        </div>
        <div></div>
      </main>
    );
}