import { IQuestion } from "types/responseDto";
import { QuestionType } from "types/enums";

export const questions: IQuestion[] = [
    {
        id: "abc",
        question: "In 1768, Captain James Cook set out to explore which ocean?",
        type: QuestionType.SINGLE_ANSWER,
        options: [
            {text: "Pacific Ocean", letter: "A"},
            {text: "Atlantic Ocean", letter: "B"},
            {text: "Indian Ocean", letter: "C"},
            {text: "Arctic Ocean", letter: "D"},
        ],
        correctOption: ["A"],
    },
    {
        id: "ytu",
        question: "Which of the following is NOT a fruit?",
        type: QuestionType.MULTIPLE_ANSWERS,
        options: [
            {text: "Apple", letter: "A"},
            {text: "Tomato", letter: "B"},
            {text: "Strawberry", letter: "C"},
            {text: "Onion", letter: "D"},
        ],
        correctOption: ["B", "D"],
    },
    {
        id: "urn",
        question: "What is the last name of first president of united states?",
        type: QuestionType.TEXT,
        correctOption: ["Washington"],
    },

]