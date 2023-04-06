export const questions = [
{
    id: 0,
    q: "If you delete the node 8 from the image above, what node would be the root node?",
    a: [{ text: "10", isCorrect: false },
        { text: "7", isCorrect: true },
        { text: "6", isCorrect: false },
        { text: "13", isCorrect: false }
    ],
    correctAnswer: "7",
},
{
    id: 1,
    q: "If there are n node sin the tree, and the tree has degenerated into a Linked-List, what would the relationship between h and n be?",
    a: [{ text: "h = n", isCorrect: true },
        { text: "h < n", isCorrect: false },
        { text: "h > n", isCorrect: false },
        { text: "h <= n", isCorrect: false }
    ],
    correctAnswer: "h = n",
},
{
    id: 2,
    q: "If one were to continue adding more and more nodes into the tree image above, would this tree ever balance itself?",
    a: [{ text: "Randomly", isCorrect: false },
        { text: "Never", isCorrect: true },
        { text: "Depends on the Case", isCorrect: false },
        { text: "Only when necessary", isCorrect: false }
    ],
    correctAnswer: "Never",
}
]