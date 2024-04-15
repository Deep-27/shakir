import React, { useState, useEffect } from 'react';
import './index.css';
import questions from './questions.json';
import './App.css';
import logo from './assets/om.png'; // Import the logo image
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes

function AllQuestionsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">All Questions</h1>
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-lg font-semibold">{question.question}</h2>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [smileClicked, setSmileClicked] = useState(false);
  const [sadClicked, setSadClicked] = useState(false);

  // Shuffle questions and select first 10
  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);
    setQuizQuestions(shuffledQuestions);
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswer = (selectedOption) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    nextQuestion();
  };

  const handleSmileClick = () => {
    setSmileClicked(true);
    setSadClicked(false);
  };

  const handleSadClick = () => {
    setSadClicked(true);
    setSmileClicked(false);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSmileClicked(false);
      setSadClicked(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);
    setQuizQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSmileClicked(false);
    setSadClicked(false);
  };

  return (
    <Router>
      <div>
        <nav className="bg-blue-500 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white font-bold text-lg">Quiz App</span>
          </div>
          <div className="flex items-center justify-center flex-grow">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <div className="flex items-center">
            <Link to="/questions" className="text-white">Questions</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/questions" element={<AllQuestionsPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [smileClicked, setSmileClicked] = useState(false);
  const [sadClicked, setSadClicked] = useState(false);

  // Shuffle questions and select first 10
  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);
    setQuizQuestions(shuffledQuestions);
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswer = (selectedOption) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    nextQuestion();
  };

  const handleSmileClick = () => {
    setSmileClicked(true);
    setSadClicked(false);
  };

  const handleSadClick = () => {
    setSadClicked(true);
    setSmileClicked(false);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSmileClicked(false);
      setSadClicked(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);
    setQuizQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSmileClicked(false);
    setSadClicked(false);
  };

  return (
    <div className="container mx-auto py-8">
      {!showResult ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">Multivariate Data Visualization Quiz</h1>
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">{quizQuestions[currentQuestionIndex]?.question}</h2>
            <div className="flex flex-col gap-4">
              {quizQuestions[currentQuestionIndex]?.options.map((option, index) => (
                <button
                  key={index}
                  className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                className={`py-2 px-4 rounded-md ${smileClicked ? 'bg-yellow-500' : 'bg-white'} hover:bg-yellow-300`}
                onClick={handleSmileClick}
              >
                😊
              </button>
              <button
                className={`py-2 px-4 rounded-md ${sadClicked ? 'bg-red-500' : 'bg-white'} hover:bg-red-300`}
                onClick={handleSadClick}
              >
                😞
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Quiz Result</h2>
          <p className="text-lg font-semibold mb-4">You scored {score} out of 10</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
