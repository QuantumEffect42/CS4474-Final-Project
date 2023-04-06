import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{createBrowserRouter, RouterProvider, } from "react-router-dom"
import LearnBSTPage from './components/pages/learning/BinarySearchTree';
import LearnAVLPage from './components/pages/learning/AVLTree';
import LearnRBPage from './components/pages/learning/RBTree';
import LearnBPlus from './components/pages/learning/B+Tree';
import PracticePage from './components/pages/practice/Practice';
import AVLQuizPage from './components/pages/quiz/AVLQuizWelcome';
import BSTQuizPage from './components/pages/quiz/BSTQuizWelcome';
import RBQuizPage from './components/pages/quiz/RBQuizWelcome';
import BPlusQuizPage from './components/pages/quiz/B+QuizWelcome';
import BSTQuiz from './components/pages/quiz/BSTQuiz';
import AVLQuiz from './components/pages/quiz/AVLQuiz';
import BPlusQuiz from './components/pages/quiz/B+Quiz';
import RBQuiz from './components/pages/quiz/RBQuiz';
import RBQuizFinalPage from './components/pages/quiz/RBQuizFinished';
import AVLQuizFinalPage from './components/pages/quiz/AVLQuizFinished';
import BPlusQuizFinalPage from './components/pages/quiz/B+QuizFinished';
import BSTQuizFinalPage from './components/pages/quiz/BSTQuizFinished';
import AVLQuizHard from './components/pages/quiz/AVLQuizHard';
import BPlusQuizHard from './components/pages/quiz/B+QuizHard';
import BSTQuizHard from './components/pages/quiz/BSTQuizHard';
import RBQuizHard from './components/pages/quiz/RBQuizHard';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/LearnBST",
    element: <LearnBSTPage />
  },
  {
    path: "/LearnAVL",
    element: <LearnAVLPage />
  },
  {
    path: "/LearnRBT",
    element: <LearnRBPage />
  },
  {
    path: "/LearnB+",
    element: <LearnBPlus />
  },
  {
    path: "/Practice",
    element: <PracticePage />
  },
  {
    path: "/BSTQuizWelcome",
    element: <BSTQuizPage />
  },
  {
    path: "/AVLQuizWelcome",
    element: <AVLQuizPage />
  },
  {
    path: "/RBTQuizWelcome",
    element: <RBQuizPage />
  },
  {
    path: "/BPlusQUizWelcome",
    element: <BPlusQuizPage />
  },
  {
    path: "/BSTQuiz",
    element: <BSTQuiz />
  },
  {
    path: "/AVLQuiz",
    element: <AVLQuiz />
  },
  {
    path: "/RBTQuiz",
    element: <RBQuiz />
  },
  {
    path: "/BPlusQUiz",
    element: <BPlusQuiz />
  },
  {
    path: "/RBQuizFinished",
    element: <RBQuizFinalPage />
  },
  {
    path: "/AVLQuizFinished",
    element: <AVLQuizFinalPage />
  },
  {
    path: "/BPlusQuizFinished",
    element: <BPlusQuizFinalPage />
  },
  {
    path: "/BSTQuizFinished",
    element: <BSTQuizFinalPage />
  },
  {
    path: "/AVLQuizHard",
    element: <AVLQuizHard />
  },
  {
    path: "/RBQuizHard",
    element: <RBQuizHard />
  },
  {
    path: "/BSTQuizHard",
    element: <BSTQuizHard />
  },
  {
    path: "/BPlusQuizHard",
    element: <BPlusQuizHard />
  }
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
