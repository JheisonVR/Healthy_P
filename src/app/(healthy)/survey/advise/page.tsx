export default function Page() {
    return (
        <div className="flex flex-wrap my-2 gap-5 justify-center items-center h-screen" >
            {/* Happy */}
            <div
                className="relative overflow-hidden w-96 h-96 rounded-3xl cursor-pointer text-2xl font-bold bg-amber-500"
            >
                <div className="z-10 absolute w-full h-full peer"></div>
                <div
                    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
                ></div>
                <div
                    className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500 p-1"
                >
                    <p className="text-wrap text-sm">Take a moment to acknowledge and celebrate your accomplishments, no matter how small they may seem</p>
                </div>
                <div className="w-full h-full items-center justify-center flex">
                    <h2 className="text-white">Happy</h2>
                </div>
            </div>
            {/* Sad */}
            <div
                className="relative overflow-hidden w-96 h-96 rounded-3xl cursor-pointer text-2xl font-bold bg-cyan-500"
            >
                <div className="z-10 absolute w-full h-full peer"></div>
                <div
                    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
                ></div>
                <div
                    className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
                >
                    <p className="text-wrap text-sm p-1">Feeling sadness is natural, so allow yourself to live your emotions without judgment. Crying is part of healing;</p>
                </div>
                <div className="w-full h-full items-center justify-center flex">
                    <h2 className="text-white">Sad</h2>
                </div>
            </div>

            {/* Fear */}

            <div
                className="relative overflow-hidden w-96 h-96 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-900"
            >
                <div className="z-10 absolute w-full h-full peer"></div>
                <div
                    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
                ></div>
                <div
                    className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
                >
                    <p className="text-wrap text-sm p-1">Fear can make you feel vulnerable, and sometimes, we react with defensive attitudes to protect ourselves.</p>
                </div>
                <div className="w-full h-full items-center justify-center flex">
                    <h2 className="text-white">Fear</h2>
                </div>
            </div>

            {/* Rage */}

            <div
                className="relative overflow-hidden w-96 h-96 rounded-3xl cursor-pointer text-2xl font-bold bg-rose-800"
            >
                <div className="z-10 absolute w-full h-full peer"></div>
                <div
                    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
                ></div>
                <div
                    className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
                >
                    <p className="text-wrap text-sm p-1">Try to pause and take a deep breath. Acknowledging what&s bothering you and giving your emotions space can help you feel calmer</p>
                </div>
                <div className="w-full h-full items-center justify-center flex">
                    <h2 className="text-white">Rage</h2>
                </div>
            </div>

            {/* Disgust */}

            <div
                className="relative overflow-hidden w-96 h-96 rounded-3xl cursor-pointer text-2xl font-bold bg-emerald-800"
            >
                <div className="z-10 absolute w-full h-full peer"></div>
                <div
                    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
                ></div>
                <div
                    className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
                >
                    <p className="text-wrap text-sm p-1">Sometimes, this is a way to protect yourself or to avoid talking about what is really going on with you. However, prolonged silence can cause others to misunderstand what you are feeling</p>
                </div>
                <div className="w-full h-full items-center justify-center flex">
                    <h2 className="text-white">Disgust</h2>
                </div>
            </div>
        </div>
    );
}