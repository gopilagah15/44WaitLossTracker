import React from 'react';

const GoalWeightInput = ({ goalWeight, setGoalWeight }) => {
  return (
    <div>
      <label>
        Goal Weight (kg):
        <input
          type="number"
          value={goalWeight}
          onChange={(e) => setGoalWeight(e.target.value)}
          placeholder="Enter goal weight"
        />
      </label>
    </div>
  );
};

export default GoalWeightInput;
