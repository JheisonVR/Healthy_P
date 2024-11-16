'use client'

// import { useState } from "react";
import { SeedQuestionsHc } from "@/seed/seedHardcode";
import Link from "next/link";

interface Props {
  data: SeedQuestionsHc;
  emotions: {
    [key:string]: string,
  };
  setEmotion: (key:string, value:string)=> void;
}

export const RadioCard = ({ data, emotions, setEmotion }: Props) => {

    const handleInputCHange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.target
        setEmotion(id, value)
    }


  return (
    <div className=  {`w-[300px] sm:w-[500px] h-auto p-3 aspect-square rounded-lg shadow items-center justify-center gap-2 bg-violet-100 ${emotions.emotion === 'Happy' && (data.index===5.1 || data.index===5.2 || data.index===5.3) ? "hidden" : "flex flex-col"}`} >
            <p className="font-semibold self-start text-lg">
              {data.description}
            </p>
      {data.option.map((op, ind) => (
        <label
          key={ind}
          className="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-50 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden"
        >
          <div className="inline-flex items-center justify-center gap-2 relative z-10">
            <p> {op.name} </p>
            <p className="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
              First
            </p>
          </div>
          <input
            type="radio"
            name= 'payment'
            value={op.name}
            id={op.index.toString()}
            className="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
            onChange={handleInputCHange}
          />
        </label>
      ))}


        <Link href= {`/survey/advise`} > 
            <button
            className= {`group/button ${data.index===9  ? "relative inline-flex" : "hidden"}   items-center justify-center overflow-hidden rounded-md bg-violet-600 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20 mt-2`} 
            >
                <span className="text-lg">Finish</span>
                <div
                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                >
                    <div className="relative h-full w-10 bg-white/30"></div>
                </div>
            </button>
            </Link>   
        </div>
  );
};

// {
//     "1": "Happy",
//     "2": "Insecure, Frustrated, Anger, Distant",
//     "3": "One month",
//     "4": "Academics",
//     "emotion": ""
// }