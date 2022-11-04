import React, { useState } from "react";

const AddTask = ({inTask}) => {
  const [value, setValue] = useState (" ")

const addItem = () => {
  inTask(value);
}
  

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Add New Task"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={addItem} className="add-btn">ADD</button>
      </div>
    </>
  );
};

export default AddTask;
