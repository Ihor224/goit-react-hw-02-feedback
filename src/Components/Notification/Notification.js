import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <div className={s.warning}>
      <span className={s.message}>{message}</span>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
