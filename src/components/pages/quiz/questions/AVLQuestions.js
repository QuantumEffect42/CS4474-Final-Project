export const questions = [{
    id: 0,
    q: "What type of data structure tree is this?",
    a: [{ text: "AVL", isCorrect: true },
        { text: "Binary Search Tree", isCorrect: false },
        { text: "Red-Black tree", isCorrect: false },
        { text: "B Tree", isCorrect: false }
    ],
    correctAnswer: "AVL",
},
{
    id: 1,
    q: "What is the difference at most between two child subtrees of an AVL Tree?",
    a: [{ text: "0", isCorrect: false, isSelected: false },
        { text: "1", isCorrect: true },
        { text: "2", isCorrect: false },
        { text: "3", isCorrect: false }
    ],
    correctAnswer: "1",
},
{
    id: 2,
    q: "What is the time complexity of insertion inside a AVL tree?",
    a: [{ text: "O(n)", isCorrect: false },
        { text: "O(n^2)", isCorrect: false },
        { text: "O(log n)", isCorrect: true},
        { text: "O(2^n)", isCorrect: false }
    ],
    correctAnswer: "O(log n)",
}
]