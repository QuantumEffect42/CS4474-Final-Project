import React from "react";
import Header from "../../navbar/Header";
import "./QuizWelcome.css"

const AVLQuizPage = () => {
    return(
        <>
            <div className="Page-Container">
                <Header />
                <div className="Page-Content">
                    <h1>
                        AVL Tree Quiz
                    </h1>

                    <p>
                        Welcome to the quiz section, the section where you can test your knowledge of a data structure of your choice.
                        The quiz is multiple choice where you will be given 4 possible answers, but only 1 is right. When you select your
                        answer, the button will turn yellow so you know exactly which one you've selected. <br />
                        Additionally, you can press the "Evaluate" button to get instant feedback on your choice. You can hit the "Next"
                        or "Back" buttons at any time to traverse through the questions in the quiz. You'll be given a final score at the
                        very end depending on how many you got right.
                    </p>

                    <br />
                    <hr />
                    <br />

                    <p>
                        This quiz will contain questions pertaining to AVL Trees. Please make sure that you
                        have at least looked at the learning page (Learning - AVL Trees) on our website before 
                        starting this quiz so you're all caught up on the concepts that will be quizzed.
                    </p>

                    <h2>Good Luck!</h2>
                    
                    <a href="/AVLQuiz">
                        <button className="start-button">
                            Begin Easy Quiz
                        </button>
                    </a>
                    <br />
                    <br />
                    <a href="/AVLQuizHard">
                        <button className="start-button">
                            Begin Hard Quiz
                        </button>
                    </a>

                </div>
            </div>
        </>
    );
};

export default AVLQuizPage;