export const questions = [
    {
        id: 0,
        q: "If you were to insert 5, 15, 25, 35 into an empty B+ tree with order 3, then insert the node 45, which node would be the parent node?",
        a: [{ text: "5", isCorrect: false },
            { text: "15", isCorrect: false },
            { text: "25", isCorrect: true },
            { text: "35", isCorrect: false }
        ],
        correctAnswer: "25",
    },
    {
        id: 1,
        q: "If you were to insert 5, 15, 25, 35, 45 into an empty B+ tree with order 3, then delete 15, which values would be in the parent node?",
        a: [{ text: "25, 35", isCorrect: true },
            { text: "5, 25", isCorrect: false },
            { text: "25, 45", isCorrect: false },
            { text: "5, 45", isCorrect: false }
        ],
        correctAnswer: "25, 35",
    },
    {
        id: 2,
        q: "What is the minimum number of keys a B+ tree with order 4 needs to have?",
        a: [{ text: "0", isCorrect: false },
            { text: "1", isCorrect: true },
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false }
        ],
        correctAnswer: "1",
    }
]