import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onIncrement }) {
  return (
    <div className={s.feedbackOptions}>
      {options.map(option => (
        <button
          key={option}
          data-action={option}
          type="button"
          className={s.btn}
          onClick={() => onIncrement(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(String).isRequired,
  onIncrement: PropTypes.func.isRequired,
};
