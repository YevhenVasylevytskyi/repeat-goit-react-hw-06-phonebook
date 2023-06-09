import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.protoType = {
  title: PropTypes.string,
};

export default Section;