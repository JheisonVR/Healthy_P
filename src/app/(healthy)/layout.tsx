import { TopBar } from "../components";

export default function HomeLayout ( {children} : {
    children: React.ReactNode;
}){
    return (
        <main className= 'min-h-screen bg-slate-50'>
            <TopBar/>
            <div className="px-0 sm:px-10">
                {children}
            </div>
        </main>
    )
}