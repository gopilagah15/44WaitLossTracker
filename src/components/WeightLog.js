import React from 'react';

const WeightLog = ({ log }) => {
  return (
    <div>
      <h2>Weight Log</h2>
      <ul>
        {log.map((entry, index) => (
          <li key={index}>
            {entry.date}: {entry.weight}kg, BMI: {entry.bmi}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeightLog;
