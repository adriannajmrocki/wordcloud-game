import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import gameData from '../../data/gameData';

import Word from '../Word/Word';
import Result from '../Result/Result';
import Button from '../Button/Button';

import './Game.css';

const Game = ({ nickname }) => {
  const [data, setData] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    setData(randomObject);
  };

  useEffect(() => {
    getRandomObject(gameData);
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    let updatedCorrectAnswers = [...correctAnswers];
    let updatedIncorrectAnswers = [...incorrectAnswers];

    if (isChecked && data.good_words.includes(event.target.value)) {
      updatedCorrectAnswers = [...correctAnswers, value];
    } else if (!isChecked && data.good_words.includes(event.target.value)) {
      updatedCorrectAnswers.splice(correctAnswers.indexOf(value), 1);
    } else if (isChecked && !data.good_words.includes(event.target.value)) {
      updatedIncorrectAnswers = [...incorrectAnswers, value]
    } else if (!isChecked && !data.good_words.includes(event.target.value)) {
      updatedIncorrectAnswers.splice(incorrectAnswers.indexOf(value), 1);
    }

    setCorrectAnswers(updatedCorrectAnswers);
    setIncorrectAnswers(updatedIncorrectAnswers);
  };

  const countPoints = () => {
    const unchecked = data.good_words.filter((word) => !correctAnswers.includes(word));
    const result = (correctAnswers.length * 2) - (incorrectAnswers.length + unchecked.length);
    
    setPoints(result);
  };

  const handleCheckAnswersClick = () => {
    countPoints();
    setIsAnswerChecked(true);
  };

  const handleFinishClick = () => {
    setShowResult(true);
  };

  if (showResult) {
    return <Result points={points} nickname={nickname} />
  };

  return (
    <div className='game'>
      <h2 className='question'>{data.question}</h2>
      <div className="game-field">
        {data.all_words?.map((word, index) => (
          <Word
            key={index}
            data={word}
            onChange={handleChange}
            isAnswerChecked={isAnswerChecked}
            correctValues={correctAnswers}
            incorrectValues={incorrectAnswers}
          />
        ))}
      </div>

      {isAnswerChecked
      ? <Button type='submit' onClick={handleFinishClick}>finish game</Button>
      : <Button type='submit' onClick={handleCheckAnswersClick}>check answers</Button>}
    </div>
  );
};

Game.propTypes = {
  nickname: PropTypes.string.isRequired
};
 
export default Game;
