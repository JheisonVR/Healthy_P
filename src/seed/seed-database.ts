import { initialData } from './seed'
//import { questions2 } from './seed';
import prisma from '../lib/prisma'

async function main(){

    // console.log(initialData);

    await Promise.all([
        prisma.results.deleteMany(),
        prisma.questions.deleteMany()
    ]);

    const {questions} = initialData;
    // const dbQ = questions2

    // console.log(questions);

    questions.forEach( async (question)=>{
        await prisma.questions.create({
            data: question
        })
    })

    // await prisma.questions.create({
    //     data: dbQ
    // })

    console.log('Seed successfully executed');

}

(()=> {

    if (process.env.NODE_ENV === 'production') return;

    main()
})();