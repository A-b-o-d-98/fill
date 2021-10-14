/*import React, { Component } from 'react'
import {QData} from './QData';
class Quiz extends Component {
    state = {
        userAnswer:null,
        currentQuestion:0,
        options:[]
    }
    


    loodQuiz = () => {
        const {currentQuestion} = this.state;
        this.setState(() => {
            return {
                questions: QData[currentQuestion].question,
                options : QData[currentQuestion].options,
                answers:QData[currentQuestion].answer
            }
        })
    }
    componentDidMount(){
        this.loodQuiz();
    }

nextQuestionHandler = () => {
    this.setState({
    currentQuestion: this.state.currentQuestion + 1    
    })
console.log(this.state.currentQuestion)
}

componentDidUpdate(prevProps,prevState){
    const {currentQuestion} = this.state;
    if(this.state.currentQuestion!== prevState.currentQuestion){
        this.setState(()=> {
            return {
                questions: QData[currentQuestion].questions,
                options : QData[currentQuestion].options,
                answers:QData[currentQuestion].answer
            }

        })
    }
}
    render() {
        const {questions, options,currentQuestion} = this.state;

        return (
            <div>
                {questions}
                <span>{`Questions ${currentQuestion } out of ${QData.length = 1} `}</span>
                {options.map(option => (
                    <p 
                    key={option.id}
                    className="ui floating message"

                    >
                        {option}


                    </p>
                ))}
                <button 
                onClick={this.nextQuestionHandler}
                >Next</button>
                
            </div>
        )
    }
}

export default Quiz;*/

import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './Quiz.css';

import Start from './QComponents/Start';
import Question from './QComponents/Question';
import End from './QComponents/End';
import Modal from './QComponents/Modal';
import quizData from './QData.json';

let interval;

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
    </div>
  );
}

export default Quiz;