import React from 'react';

const Progress = ({ log, goalWeight }) => {
  const calculateProgress = () => {
    if (!goalWeight || log.length === 0) return 'No progress';
    const latestWeight = log[log.length - 1].weight;
    const progress = ((latestWeight - goalWeight) / goalWeight) * 100;
    return progress.toFixed(2);
  };

  return goalWeight ? (
    <div>
      <h2>Progress</h2>
      <p>{calculateProgress()}% towards your goal!</p>
    </div>
  ) : null;
};

export default Progress;
