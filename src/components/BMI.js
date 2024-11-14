import React from 'react';

const BMI = ({ bmi }) => {
  return bmi ? (
    <div>
      <h3>Your BMI: {bmi}</h3>
    </div>
  ) : null;
};

export default BMI;
