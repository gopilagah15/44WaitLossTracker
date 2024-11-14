import React from 'react';

const WeightInput = ({ weight, height, setWeight, setHeight, logWeight }) => {
  return (
    <div>
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </label>
      <label>
        Height (m):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </label>
      <button onClick={logWeight}>Log Weight</button>
    </div>
  );
};

export default WeightInput;
