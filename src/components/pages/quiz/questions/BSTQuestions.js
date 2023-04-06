export const questions = [{
    id: 0,
    q: "What type of data structure tree is this?",
    a: [{ text: "AVL", isCorrect: false },
        { text: "Binary Search Tree", isCorrect: true },
        { text: "Red-Black tree", isCorrect: false },
        { text: "B+ Tree", isCorrect: false }
    ],
    correctAnswer: "Binary Search Tree"

},
{
    id: 1,
    q: "Which side of the subtree must also be a binary seach tree?",
    a: [{ text: "right", isCorrect: false, isSelected: false },
        { text: "left", isCorrect: false },
        { text: "neither", isCorrect: false },
        { text: "both", isCorrect: true }
    ],
    correctAnswer: "both"

},
{
    id: 2,
    q: "What is the time complexity of insertion inside a binary search tree where h is the height of the tree",
    a: [{ text: "O(h)", isCorrect: true },
        { text: "O(h^2)", isCorrect: false },
        { text: "O(log h)", isCorrect: false},
        { text: "O(2^h)", isCorrect: false }
    ],
    correctAnswer: "O(h)"

}
]
