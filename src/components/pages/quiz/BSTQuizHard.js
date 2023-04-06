import React from "react";
import Header from "../../navbar/Header";
import { questions } from "./questions/BSTHardQuestions"
import Magnifier from "react-magnifier";
import bstImage from "./images/bst.png"
import "./Quiz-Style.css"
import { Link } from "react-router-dom";

var questionIndex = 0;
var scoreArray;

export default class BSTQuizHard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result: "",
            resultColour: "white",
            numberOfQuestions: questions.length,
            a1Colour: "lightskyblue",
            a2Colour: "lightskyblue",
            a3Colour: "lightskyblue",
            a4Colour: "lightskyblue",
            correctAnswer: questions[0].correctAnswer,
            currentQuestion: questions[0].q,
            answer1: questions[0].a[0].text,
            answer2: questions[0].a[1].text,
            answer3: questions[0].a[2].text,
            answer4: questions[0].a[3].text,
            selectedAnswer: null,
            finishedQuiz: false,
        }
        scoreArray = new Array(this.state.numberOfQuestions);
        for(let i = 0; i < scoreArray.length; i++){ //zero the array
            scoreArray[i] = 0;
        }
    }

    selectAnswer(question){
        if(question === "op1"){
            this.setState({a1Colour: "lightgoldenrodyellow"});
            this.setState({a2Colour: "lightskyblue"});
            this.setState({a3Colour: "lightskyblue"});
            this.setState({a4Colour: "lightskyblue"});
            this.setState({selectedAnswer: this.state.answer1});
        }
        else if(question === "op2"){
            this.setState({a1Colour: "lightskyblue"});
            this.setState({a2Colour: "lightgoldenrodyellow"});
            this.setState({a3Colour: "lightskyblue"});
            this.setState({a4Colour: "lightskyblue"});
            this.setState({selectedAnswer: this.state.answer2});
        }
        else if(question === "op3"){
            this.setState({a1Colour: "lightskyblue"});
            this.setState({a2Colour: "lightskyblue"});
            this.setState({a3Colour: "lightgoldenrodyellow"});
            this.setState({a4Colour: "lightskyblue"});
            this.setState({selectedAnswer: this.state.answer3});
        }
        else{
            this.setState({a1Colour: "lightskyblue"});
            this.setState({a2Colour: "lightskyblue"});
            this.setState({a3Colour: "lightskyblue"});
            this.setState({a4Colour: "lightgoldenrodyellow"});
            this.setState({selectedAnswer: this.state.answer4});
        }
        console.log(this.state.answer4)
    }

    evaluate = () =>{
        if(this.state.selectedAnswer === this.state.correctAnswer){
            this.setState({resultText: "True"})
            this.setState({resultColour: "green"})
            scoreArray[questionIndex] = 1;
        }
        else{
            this.setState({resultText: "False"})
            this.setState({resultColour: "red"})
            scoreArray[questionIndex] = 0;
        }
    }

    next = () =>{
        if(questionIndex !== this.state.numberOfQuestions - 1){ //makes sure we don't run out of array bounds
            this.setState({finishedQuiz: false})
            questionIndex++;
            this.setState({resultText: ""})
            this.setState({correctAnswer: questions[questionIndex].correctAnswer})
            this.setState({currentQuestion: questions[questionIndex].q})
            this.setState({answer1: questions[questionIndex].a[0].text})
            this.setState({answer2: questions[questionIndex].a[1].text})
            this.setState({answer3: questions[questionIndex].a[2].text})
            this.setState({answer4: questions[questionIndex].a[3].text})
        }

        if(questionIndex === this.state.numberOfQuestions - 1){
            this.setState({finishedQuiz: true});
        }
    }

    previous = () =>{
        this.setState({finishedQuiz: false})
        if(questionIndex !== 0){ //makes sure we don't run out of array bounds
            questionIndex--;
            this.setState({resultText: ""});
            this.setState({correctAnswer: questions[questionIndex].correctAnswer})
            this.setState({currentQuestion: questions[questionIndex].q})
            this.setState({answer1: questions[questionIndex].a[0].text})
            this.setState({answer2: questions[questionIndex].a[1].text})
            this.setState({answer3: questions[questionIndex].a[2].text})
            this.setState({answer4: questions[questionIndex].a[3].text})
        }
    }

    render(){

        const linkStyle = {
            margin: "1rem",
            backgroundColor: "lightskyblue",
            width: "200px",
            lineHeight: "50px",
            borderRadius: "10%",
            textAlign: "center",
            border: "2px solid black"
        }

        const finishedQuiz = this.state.finishedQuiz;
        let answerSum = 0;
        let finshButton;
        if(finishedQuiz){

            for(let i = 0; i < this.state.numberOfQuestions; i++){
                answerSum += scoreArray[i];
            }

            if(isNaN(answerSum)){
                answerSum = 0;
            }

            let scoreText = answerSum.toString() + "/" + this.state.numberOfQuestions.toString();

            finshButton = <Link to={"/BSTQuizFinished"} state={{from: scoreText}} style={linkStyle}>Finish Quiz</Link>
        }
        else{
            finshButton = <></>
        }

        return(
            <>
                <div className="Page-Container">
                    <Header />
                    <div className="Page-Content">
                        <h1>
                            Binary Search Tree Quiz
                        </h1>
                    </div>

                    <div className="panel">
                        <div className="result" style={{color: this.state.resultColour}}>
                            {this.state.resultText}
                        </div>
                        <div className="question-container" id="question">
                            {this.state.currentQuestion}
                        </div>

                        <div className="img-magnifier-container">
                            <Magnifier src={bstImage} height={400} width={400}/>
                        </div>
                    </div>

                    <div className="option-container">
                        <button className="option" onClick={() => this.selectAnswer("op1")} style={{backgroundColor: this.state.a1Colour}} >
                            {this.state.answer1}
                        </button>
                
                        <button className="option" onClick={() => this.selectAnswer("op2")} style={{backgroundColor: this.state.a2Colour}}>
                            {this.state.answer2}
                        </button>
                
                        <button className="option" onClick={() => this.selectAnswer("op3")} style={{backgroundColor: this.state.a3Colour}}>
                            {this.state.answer3}
                        </button>
                
                        <button className="option" onClick={() => this.selectAnswer("op4")} style={{backgroundColor: this.state.a4Colour}}>
                            {this.state.answer4}
                        </button>
                    </div>
                    <div className="navigation">
                        <button className="back" onClick={this.previous}> Back </button>
                        <button className="evaluate" onClick={this.evaluate}>Evaluate</button>    
                        <button className="next" onClick={this.next}>Next</button>
                    </div> 
                    <br />

                    <div className="finish-button">
                        {finshButton}
                    </div>  
                </div>
            </>
        )
    }
}