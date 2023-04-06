
export const questions = [{
    id: 0,
    q: "What type of data structure tree is this?",
    a: [{ text: "AVL", isCorrect: false },
        { text: "Binary Search Tree", isCorrect: false },
        { text: "Red-Black tree", isCorrect: true },
        { text: "B Tree", isCorrect: false }
    ],
    correctAnswer: "Red-Black tree",

},
{
    id: 1,
    q: "How many black nodes exist in the path?",
    a: [{ text: "1", isCorrect: false, isSelected: false },
        { text: "5", isCorrect: false },
        { text: "0", isCorrect: false },
        { text: "3", isCorrect: true }
    ],
    correctAnswer: "3",

},
{
    id: 2,
    q: "What is the time complexity of searching in a Red-Black Trees",
    a: [{ text: "O(n)", isCorrect: false },
        { text: "O(n^2)", isCorrect: false },
        { text: "O(log n)", isCorrect: true },
        { text: "O(2^n)", isCorrect: false }
    ],
    correctAnswer: "O(log n)",
}];