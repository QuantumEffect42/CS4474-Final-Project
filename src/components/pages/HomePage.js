import React from "react";
import Header from "../navbar/Header";
import "./HomePage.css"
import homeArt from "./Images/Home_Art.png"

const Home = () => {
    return(
        <div className="Page-Container">
            <Header />

            <div className="title-container">
                <div className="welcome-1">
                    <h2 className="intro">Easy Free Data Structures Lessons</h2>
                    <p className="title-text">
                        Learn data structures and the algorithms behind them in an easy to digest way. Experiment
                        with our visualizers, quizes and lessons to learn at your own pace.
                    </p>
                </div>
                <div className="welcome-2">
                    <img src={homeArt} alt="Home Art" id="art"></img>
                </div>
            </div>

            
            <div className="lesson-container">
                <h3 className="lesson-header">Click on the lessons tab at the top or click a picture below to get started!</h3>
                <div className="first-cards">
                    <div className="box">
                        <h4>Binary Search Trees</h4>
                        <a href="/LearnBST">
                            <img src="https://miro.medium.com/v2/resize:fit:976/0*87ArmAxh9T5Ns3Um.gif" alt="BST"></img>
                        </a>
                    </div>
                    <div className="box">
                    <h4>AVL Trees</h4>
                        <a href="/LearnAVL">
                            <img src="https://wkdtjsgur100.github.io/images/posts/rotation.gif" alt="AVL"></img>
                        </a>
                    </div>
                </div>
                <div className="second-cards">
                    <div className="box">
                        <h4>Red-Black Trees</h4>
                        <a href="/LearnRBT">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg" alt="RBT"></img>
                        </a>
                    </div>
                    <div className="box">
                        <h4>B+ Trees</h4>
                        <a href="/LearnB+">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Bplustree.png/400px-Bplustree.png" alt="BPlusT"></img>
                        </a>
                    </div>
                </div>
                <p className="documentation">
                    The learning pages are your places to start your dive into data structures. All the basic concepts and operations will be covered
                    for every data structure to get you ready for to use the visualizers with ease. You can click one of the cards above or you
                    can select a lesson from the "Learn" dropdown menu at the top header. You'll jump right into your lesson with a progress bar and
                    table of contents to help you jump through the lessons and track your progress. 
                </p>
            </div>
        </div>
    );
}

export default Home;