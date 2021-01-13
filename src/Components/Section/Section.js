import React from 'react';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={s.section}>
    {title}
    {children}
  </section>
);

export default Section;
