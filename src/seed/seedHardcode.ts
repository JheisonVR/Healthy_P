export interface SeedQuestionsHc {
    description: string,
    index: number,
    option: OptionData[], 
}

export interface SeedData {
    questions: SeedQuestionsHc[]
}

export interface OptionData{
    name: string,
    id: string
    index: number
}

export const initialData: SeedData = {
    questions: [
        {
            description: "Which of the following emotions best describes how you feel today?",
            index: 1,
            option: [
                { name: 'Happy', id: 'k3b5v', index: 1 },
                { name: 'Sad', id: 'a8s2t', index: 1 },
                { name: 'Fear', id: 'z1x9y', index: 1 },
                { name: 'Rage', id: 'c4d7u', index: 1 },
                { name: 'Disgust', id: 'm6p0w', index: 1 }
            ]
        },
        {
            description: "Select the group of emotions you experience most often.",
            index: 2,
            option: [
                { name: 'Empty, boredom, inferior and ignored', id: 'k3b5v1', index: 2 },
                { name: 'Ashamed, Evasive, Skeptical, Disappointed', id: 'a8s2t1', index: 2 },
                { name: 'Insecure, Frustrated, Anger, Distant', id: 'z1x9y1', index: 2 },
                { name: 'Shameful, Rejected, Inferior, Scared', id: 'c4d7u1', index: 2 },
                { name: 'Important, Optimistic, Hopeful, Fulfilled', id: 'm6p0w1', index: 2 }
            ]
        },
        {
            description: "How long have you been experiencing these emotions?",
            index: 3,
            option: [
                { name: 'A couple of days', id: 'k3b5v2', index: 3 },
                { name: 'Over two weeks', id: 'a8s2t2', index: 3 },
                { name: 'One month', id: 'z1x9y2', index: 3 },
                { name: 'Over a month', id: 'c4d7u2', index: 3 }
            ]
        },
        {
            description: "What situations make you feel these emotions?",
            index: 4,
            option: [
                { name: 'family matters', id: 'k3b5v3', index: 4 },
                { name: 'Academics', id: 'a8s2t3', index: 4 },
                { name: 'Friendships', id: 'z1x9y3', index: 4 },
                { name: 'Romantic', id: 'c4d7u3', index: 4 },
                { name: 'Future plans', id: 'm6p0w2', index: 4 }
            ]
        },
        {
            description: "How do you usually express sadness?",
            index: 5.1,
            option: [
                { name: 'Crying', id: 'k3b5v4', index: 5.1 },
                { name: 'Isolation', id: 'a8s2t4', index: 5.1 },
                { name: 'Irritability', id: 'z1x9y4', index: 5.1 },
                { name: 'Overthinking', id: 'c4d7u4', index: 5.1 },
                { name: 'Sarcasm or ironic comments', id: 'm6p0w3', index: 5.1 }
            ]
        },
        {
            description: "How do you usually show your disgust?",
            index: 5.2,
            option: [
                { name: 'Sarcasm or ironic comments', id: 'k3b5v5', index: 5.2 },
                { name: 'Defiant attitudes', id: 'a8s2t5', index: 5.2 },
                { name: 'Avoiding social circles', id: 'z1x9y5', index: 5.2 },
                { name: 'Affective flattening', id: 'c4d7u5', index: 5.2 }
            ]
        },
        {
            description: "How do you usually let your anger out?",
            index: 5.3,
            option: [
                { name: 'Defiant attitudes', id: 'k3b5v6', index: 5.3 },
                { name: 'Shouting or raised voice', id: 'a8s2t6', index: 5.3 },
                { name: 'Hitting or impulsive behaviors', id: 'z1x9y6', index: 5.3 }
            ]
        },
        {
            description: "How do you usually show your fear?",
            index: 5.4,
            option: [
                { name: 'Defensive attitudes', id: 'k3b5v7', index: 5.4 },
                { name: 'Difficulty sleeping', id: 'a8s2t7', index: 5.4 },
                { name: 'Anxiety and/or avoidance', id: 'z1x9y7', index: 5.4 },
                { name: 'Seeking support from others', id: 'c4d7u6', index: 5.4 }
            ]
        },
        {
            description: "On a scale of 1 to 10, with 1 being the least intense and 10 being the most intense, how intense is your emotion?",
            index: 6,
            option: [
                { name: '1', id: 'k3b5v8', index: 6 },
                { name: '2', id: 'a8s2t8', index: 6 },
                { name: '3', id: 'z1x9y8', index: 6 },
                { name: '4', id: 'c4d7u7', index: 6 },
                { name: '5', id: 'm6p0w4', index: 6 },
                { name: '6', id: 't8r1q', index: 6 },
                { name: '7', id: 'e2j4s', index: 6 },
                { name: '8', id: 'f9h3g', index: 6 },
                { name: '9', id: 'i5k7l', index: 6 },
                { name: '10', id: 'o7n9p', index: 6 }
            ]
        },
        {
            description: "Do you use social media to share posts related to your emotions?",
            index: 7,
            option: [
                { name: 'Yes', id: 'k3b5v9', index: 7 },
                { name: 'No', id: 'a8s2t9', index: 7 }
            ]
        },
        {
            description: "When you experience one of these emotions, do you exhibit any of the following behaviors?",
            index: 8,
            option: [
                { name: 'Overeating,', id: 'k3b5v10', index: 8 },
                { name: 'Drinking alcohol', id: 'a8s2t10', index: 8 },
                { name: 'Smoking cigarettes or vaping', id: 'z1x9y9', index: 8 },
                { name: 'Using psychoactive substances', id: 'c4d7u8', index: 8 },
                { name: 'none of the above', id: 'm6p0w5', index: 8 }
            ]
        },
        {
            description: "Would you like to explore some strategies for managing this feeling more effectively?",
            index: 9,
            option: [
                { name: 'Yes', id: 'k3b5v11', index: 9 },
                { name: 'No', id: 'a8s2t11', index: 9 }
            ]
        }
    ]
}