import Link from "next/link";
import { FaHome } from "react-icons/fa";


export default function Page() {
    return (
     
            
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="absolute left-4 top-5"> <Link href={'/'}><FaHome/></Link> </div>
                <div className="w-full max-w-md bg-violet-50 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">New Account</h2>
                    <form className="flex flex-col" autoComplete="off">
                        <input type="text" className="bg-white text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-100 transition ease-in-out duration-150" placeholder="Full name" autoComplete="off" />
                        <input type="email" className="bg-white text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-100 transition ease-in-out duration-150" placeholder="Email address" autoComplete="off"/>
                        <input type="password" className="bg-white text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" autoComplete="off"/>
                                {/* <div className="flex items-center justify-between flex-wrap">
                                    <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
                                        <input type="checkbox" id="remember-me" className="mr-2"/>
                                            Remember me
                                    </label>
                                    <Link href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</Link>
                                    <p className="text-gray-900 mt-4"> Don&apos;t have an account? <a href="#" className="text-sm text-blue-500 -200 hover:underline mt-4">Signup</a></p>
                                </div> */}
                                <button type="submit" className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-violet-600 hover:to-violet-800 transition ease-in-out duration-150">Create account</button>
                            </form>
                        </div>
                </div>
    );
}