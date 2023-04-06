// Questions will be asked
const Questions = [{
    id: 0,
    q: "What type of data structure tree is this?",
    a: [{ text: "AVL", isCorrect: false },
        { text: "Binary Search Tree", isCorrect: true },
        { text: "Red-Black tree", isCorrect: false },
        { text: "B Tree", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Which side of the subtree must also be a binary seach tree?",
    a: [{ text: "right", isCorrect: false, isSelected: false },
        { text: "left", isCorrect: false },
        { text: "neither", isCorrect: false },
        { text: "both", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the time complexity of insertion inside a binary search tree where h is the height of the tree",
    a: [{ text: "O(h)", isCorrect: true },
        { text: "O(h^2)", isCorrect: false },
        { text: "O(log h)", isCorrect: false},
        { text: "O(2^h)", isCorrect: false }
    ]

}
]




// Set start
var start = true;
var totalScore = 0;
var choice = "false";
// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
    
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        choice = selected;
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            //totalScore++;
            //console.log(totalScore);
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
           
        }
        
    })
}
if (start) {
    iterate("0");
    //console.log("here");
}



// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
var  totalScore = 0;
var score = 0;
var value = false; 
next.addEventListener("click", () => {
    
 
    if (id < 2) {
        id++
        iterate(id);
        if (choice == "true"){
            score++;
            totalScore++;
        }
    } else if(id == 2) {
        if (choice == "true"){
            score++;
            totalScore++;
        }

        console.log(score);
        var message = "Here is your score: " + Math.max(score, 3) + " out of: " + 3;
        document.getElementById("score").innerHTML = message;
        }
        
// Back button and method
const back = document.getElementsByClassName("back")[0];

back.addEventListener("click", () => {
    if (id > 0) {
        id--;
        iterate(id);
        console.log(value);
    }
})

})
