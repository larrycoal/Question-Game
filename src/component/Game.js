import React, { useState } from "react";
import { withRouter } from "react-router";

const Game = (props) => {
  // An array of all question asked
  const [questions, setQuestions] = useState([]);
  // player question
  const [question, setQuestion] = useState("");
  //Secret word to be guessed
  const [guessWord, setGuessWord] = useState("");
  // player's guesses
  const [guess, setGuess] = useState();
  //result of player guess
  const [result, setResult] = useState();
  const [error, setError] = useState({});

  const showQuestion = () => {
    if (questions.length === 0) {
      return <div>No question asked yet</div>;
    }
    return questions.map((ques, i) => (
      <div key={i} className="question-list">
        <li>{ques.question}</li>
        <button
          style={{ background: ques.answer === "yes" ? "red" : null }}
          onClick={() => {
            updateAnswer("yes", i);
          }}
        >
          Yes
        </button>
        <button
          style={{ background: ques.answer === "No" ? "red" : null }}
          onClick={() => {
            updateAnswer("No", i);
          }}
        >
          No
        </button>
      </div>
    ));
  };
  //all questions
  const updateQuestion = (e) => {
    e.preventDefault();
    if (question !== "" && guessWord !== "" && questions.length < 20) {
      let newQuestion = { question: question, answer: "" };
      let allQuestion = questions;
      allQuestion.push(newQuestion);
      setQuestions(allQuestion);
      setQuestion("");
    } else if (question === "") {
      setError({
        question: true,
      });
    } else if (guessWord === "") {
      setError({
        guessWord: true,
      });
    } else {
      setError({
        questions: true,
      });
    }
  };
  //Updates player response to yes/no
  const updateAnswer = (ans, i) => {
    let allQuestion = questions;
    allQuestion[i].answer = ans;
    setQuestions(allQuestion);
    props.history.push("/home");
  };
  //user question
  const handleQuestion = (e) => {
    const question = e.target.value;
    setQuestion(question);
    setError({
      question: false,
    });
  };
  //check if guess is correct
  const checkAnswer = (e) => {
    e.preventDefault();
    if (questions.length === 20) {
      setError({
        lastGuess: true,
      });
    }
    if (guess === guessWord) {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  const handleRestart = () => {
    setGuessWord("");
    setQuestions([]);
    setResult("");
    setGuess("");
  };

  const showResult = () => {
    if (error.lastGuess && result === "wrong") {
      return (
        <div>
          <p>You Ran Out Of Guesses</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      );
    } else if (result === "correct") {
      return (
        <div>
          <p>ROCK ON!!! CORRECT GUESS</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      );
    } else if (result === "wrong") {
      return (
        <div>
          <p>TRY AGAIN</p>
          <p>hint:Its a {guessWord.length} letter word</p>
        </div>
      );
    }
  };

  const handleGuess = (e) => {
    let newGuess = e.target.value.trim();
    if (newGuess !== "") {
      setGuessWord(newGuess);
      setError({
        guessWord: false,
      });
    }
  };
  return (
    <div className="game-container">
      <div>
        <h2>Enter guess word</h2>
        <input value={guessWord} onChange={handleGuess} type="password" />
        {error.guessWord ? (
          <div className="error">Enter a guess word to start game</div>
        ) : null}
      </div>
      <div className="panel">
        <div className="question-panel">
          <h2>Question {questions.length}/20</h2>
          <form>
            <input type="text" value={question} onChange={handleQuestion} />
            <button onClick={updateQuestion}>Ask</button>
          </form>
          {error.question ? (
            <div className="error">Question field is empty</div>
          ) : null}
          <ul>{showQuestion()}</ul>
          {error.questions ? (
            <div className="error">Sorry You Ran Out Of Questions</div>
          ) : null}
        </div>
        <div className="guess-panel">
          <h2>Take a guess</h2>
          <form>
            <input
              onChange={(e) => setGuess(e.target.value)}
              value={guess}
              type="text"
            />
            <button onClick={checkAnswer}>Guess</button>
          </form>
          <div className="result">{showResult()}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Game);
