import React, { useState } from 'react';
import WeightInput from './WeightInput';
import GoalWeightInput from './GoalWeightInput';
import WeightLog from './WeightLog';
import Progress from './Progress';
import BMI from './BMI';

const WeightTracker = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [log, setLog] = useState([]);
  const [goalWeight, setGoalWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  // Handle logging of weight entry
  const logWeight = () => {
    const newBmi = calculateBMI(weight, height);
    setBmi(newBmi);
    const newLog = [...log, { weight, date: new Date().toLocaleDateString(), bmi: newBmi }];
    setLog(newLog);
    setWeight('');
    setHeight('');
  };

  // BMI Calculation Function
  const calculateBMI = (weight, height) => {
    if (weight <= 0 || height <= 0) return 0;
    return (weight / (height * height)).toFixed(2);
  };

  return (
    <div className="tracker-container">
      <h1>Weight Loss Tracker</h1>
      <WeightInput
        weight={weight}
        height={height}
        setWeight={setWeight}
        setHeight={setHeight}
        logWeight={logWeight}
      />
      <GoalWeightInput goalWeight={goalWeight} setGoalWeight={setGoalWeight} />
      <BMI bmi={bmi} />
      <WeightLog log={log} />
      <Progress log={log} goalWeight={goalWeight} />
    </div>
  );
};

export default WeightTracker;
