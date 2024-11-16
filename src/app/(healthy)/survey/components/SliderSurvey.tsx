'use client'

// import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import {RadioCard } from "../components"
import { initialData } from '../../../../seed/seedHardcode'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from "react"

export const SliderSurvey = () => {

    const { questions } = initialData

    const [emotions, setEmotion] = useState({
        
    })

    const handleAnswerChange = (key: string, value:string) => {
        setEmotion((prevState)=> ({
            ...prevState,
            [key]:value,
        }))
        console.log(emotions);
    };


    return (
        <section className="w-screen py-2">
            <div className="container">
                <Swiper
                    navigation
                    pagination={{type:'fraction'}}
                    modules={[Navigation, Pagination]}
                    className="h-screen w-full  rounded-lg"
                >
                    {
                        questions.map( (q, i) => (
                            <SwiperSlide key={i}>
                                <div className="flex h-full items-center justify-center">

                                        <RadioCard
                                            data= {q}
                                            emotions={emotions}
                                            setEmotion = {handleAnswerChange}
                                        />
                                </div>
                            </SwiperSlide> 
                        ))
                    }
                </Swiper>
            </div>
            {/* <div>
                {
                    emotions ? (
                        <> {emotions.emotion} </>
                    ):
                    (
                        <p>no hay nada</p>
                    )
                }
            </div> */}
        </section>

    )

}


{/* <div className="flex flex-col justify-center items-center min-h-screen gap-5 my-1">
{
    questions.map( (q, i) => ( 
        <RadioCard
            key={i}
            data= {q}
        />
    ))

}
</div> */}