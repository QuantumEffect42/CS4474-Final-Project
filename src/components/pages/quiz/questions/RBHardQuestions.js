export const questions = [
    {
        id: 0,
        q: "Which nodes have no parent value?",
        a: [{ text: "Only black nodes", isCorrect: false },
            { text: "Only red nodes", isCorrect: false },
            { text: "The root node", isCorrect: true },
            { text: "All nodes have a parent", isCorrect: false }
        ],
        correctAnswer: "The root node",
    },
    {
        id: 1,
        q: "If you were to insert the values 1, 2, 3, 4 into an empty Red-Black tree, which value would be a red node?",
        a: [{ text: "1", isCorrect: false },
            { text: "4", isCorrect: true },
            { text: "3", isCorrect: false },
            { text: "2", isCorrect: false }
        ],
        correctAnswer: "4",
    },
    {
        id: 2,
        q: "If you were to insert 1, 2, 3, 4 into an empty Red-Black tree and then delete the node containing 4, which value would be a red node?",
        a: [{ text: "1", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "None of the above", isCorrect: true }
        ],
        correctAnswer: "None of the above",
    }
]