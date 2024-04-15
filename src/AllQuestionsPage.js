import React from 'react';
import questions from './questions.json';

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

export default AllQuestionsPage;
