export const MenuItems = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Learn",
        url: "/",
        submenu: [
            {
                title: "Binary Search Trees",
                url: "/CS4474-Final-Project/LearnBST"
            },
            {
                title: "AVL Trees",
                url: "/LearnAVL"
            },
            {
                title: "Red-Black Trees",
                url: "/LearnRBT"
            },
            {
                title: "B+ Trees",
                url: "/LearnB+"
            }
        ]
    },
    { //take them to the page the where they will be asked practice questions on a selected data structure
        title: "Practice",
        url: "/Practice",
    },
    {
        title: "Quiz",
        url: "/Quiz",
        submenu: [
            {
                title: "Binary Search Tree Quiz",
                url: "/BSTQuizWelcome"
            },
            {
                title: "AVL Tree Quiz",
                url: "/AVLQuizWelcome"
            },
            {
                title: "Red-Black Tree Quiz",
                url: "/RBTQuizWelcome"
            },
            {
                title: "B+ Tree Quiz",
                url: "/BPlusQuizWelcome"
            },
        ]
    }
]