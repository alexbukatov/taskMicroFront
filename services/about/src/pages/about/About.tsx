import React from 'react';
import { sum } from '@packages/shared';

const About = () => {
  return (
    <>
      <h1>ABOUT</h1>
      <div>{sum(3, 7)}</div>
    </>
  );
};

export default About;
