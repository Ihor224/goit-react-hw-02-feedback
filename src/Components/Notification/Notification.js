import React from 'react';
import s from './Notification.module.css';

const Notification = ({ message }) => (
  <div className={s.warning}>
    <span className={s.message}>{message}</span>
  </div>
);

export default Notification;
