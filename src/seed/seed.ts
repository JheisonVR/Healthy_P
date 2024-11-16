export interface SeedQuestions {
    description: string,
    index: number,
    option: string[], 
}

export interface SeedData {
    questions: SeedQuestions[]
}

export const initialData: SeedData = {
    questions: [
        {
            description: "Which of the following emotions best describes how you feel today?",
            index: 1,
            option: ['Happy', 'Sad', 'Fear', 'Rage', 'Disgust']
        },
        {
            description: "Select the group of emotions you experience most often.",
            index: 2,
            option: ['Empty, boredom, inferior and ignored', 'Ashamed, Evasive, Skeptical, Disappointed', 'Insecure, Frustrated, Anger, Distant', 'Shameful, Rejected, Inferior, Scared', 'Important, Optimistic, Hopeful, Fulfilled']
        },
        {
            description: "How long have you been experiencing these emotions?",
            index: 3,
            option: ['A couple of days', 'Over two weeks', 'One month', 'Over a month']
        },
        {
            description: "What situations make you feel these emotions?",
            index: 4,
            option: ['family matters', 'Academics', 'Friendships', 'Romantic', 'Future plans']
        },
        {
            description: "How do you usually express sadness?",
            index: 5.1,
            option: ['Crying', 'Isolation', 'Irritability', 'Overthinking', 'Sarcasm or ironic comments']
        },
        {
            description: "How do you usually show your disgust?",
            index: 5.2,
            option: ['Sarcasm or ironic comments', 'Defiant attitudes', 'Avoiding social circles', 'Affective flattening']
        },
        {
            description: "How do you usually let your anger out?",
            index: 5.3,
            option: ['Defiant attitudes', 'Shouting or raised voice', 'Hitting or impulsive behaviors']
        },
        {
            description: "How do you usually show your fear?",
            index: 5.4,
            option: ['Defensive attitudes', 'Difficulty sleeping', 'Anxiety and/or avoidance', 'Seeking support from others']
        },
        {
            description: "On a scale of 1 to 10, with 1 being the least intense and 10 being the most intense, how intense is your emotion?",
            index: 6,
            option: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        {
            description: "Do you use social media to share posts related to your emotions?",
            index: 7,
            option: ['Yes', 'No']
        },
        {
            description: "When you experience one of these emotions, do you exhibit any of the following behaviors?",
            index: 8,
            option: ['Overeating,', 'Drinking alcohol', 'Smoking cigarettes or vaping', 'Using psychoactive substances', 'none of the above']
        },
        {
            description: "Would you like to explore some strategies for managing this feeling more effectively?",
            index: 9,
            option: ['Yes', 'No']
        },
    ]
}


export const questions2 =  
    {
        description: "Which of the following emotions best describes how you feel today?",
        index: 1,
        option: ['Happy', 'Sad', 'Fear', 'Rage', 'Disgust']
    }