export const questions = [{
    id: 0,
    q: "What type of data structure tree is this?",
    a: [{ text: "AVL", isCorrect: false },
        { text: "Binary Search Tree", isCorrect: false },
        { text: "Red-Black tree", isCorrect: false },
        { text: "B+ Tree", isCorrect: true }
    ],
    correctAnswer: "B+ Tree",

},
{
    id: 1,
    q: "What type of order do the keys need to be so it can be comparable with each other?",
    a: [{ text: "zero", isCorrect: false, isSelected: false },
        { text: "partial", isCorrect: false },
        { text: "total", isCorrect: true },
        { text: "mixed", isCorrect: false }
    ],
    correctAnswer: "total",

},
{
    id: 2,
    q: "What is the time complexity of insertion inside a B Plus tree?",
    a: [{ text: "O(n)", isCorrect: false },
        { text: "O(log n)", isCorrect: true},
        { text: "O(n^2)", isCorrect: false },
        { text: "O(2^n)", isCorrect: false }
    ],
    correctAnswer: "O(log n)",

}
]
