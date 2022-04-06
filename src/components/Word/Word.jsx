import React from 'react';
import PropTypes from 'prop-types';

import './Word.css';

const Word = ({ data, onChange, isAnswerChecked, correctValues, incorrectValues }) => {
  let result, label;

  if (isAnswerChecked && correctValues.includes(data)) {
    result = <span className='word' style={{ color: '#00b200', marginBottom: '-20px' }}>Good</span>;
    label = <label htmlFor={data} className='word' style={{ color: '#7fff7f' }}>{data}</label>
  } else if (isAnswerChecked && incorrectValues.includes(data)) {
    result = <span className='word' style={{ color: '#ef7e75', marginBottom: '-20px' }}>Bad</span>;
    label = <label htmlFor={data} className='word' style={{ color: '#e54a3f' }}>{data}</label>
  } else {
    label = <label htmlFor={data} className='word'>{data}</label>
  }

  return (
    <div className='word-container'>
      {result}
      <input
        type='checkbox'
        className='checkbox'
        id={data}
        value={data}
        onChange={onChange}
        disabled={isAnswerChecked}
      />
      {label}
    </div>
  );
};

Word.propTypes = {
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isAnswerChecked: PropTypes.bool.isRequired,
  correctValues: PropTypes.array.isRequired,
  incorrectValues: PropTypes.array.isRequired,
};
 
export default Word;
