import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = props => (
  <div>
    {props.options.map(option => (
      <button
        key={option}
        data-action={option}
        type="button"
        className={s.btn}
        onClick={() => props.onIncrement(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
