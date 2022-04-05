import {questions} from 'mocks';

export const fetchQuestions = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(questions);
        }, 1000)
    })
}