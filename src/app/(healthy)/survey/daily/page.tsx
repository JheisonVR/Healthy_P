// import { RadioCard } from "../components"
// import { initialData } from '../../../../seed/seed'
import { SliderSurvey } from "../components/SliderSurvey";




export default function Page() {

    // const { questions } = initialData

    return (
        <div className="flex justify-center items-center">
            {/* <div className="flex flex-col justify-center items-center min-h-screen gap-5 my-1">
                {
                    questions.map((q, i) => (
                        <RadioCard
                            key={i}
                            data={q}
                        />
                    ))

                }
            </div> */}

                <SliderSurvey/>
        </div>
    );
}