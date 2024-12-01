import React from "react";

const RadioField = ({ label, name, options, value, setFieldValue }) => {
  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={handleChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioField;
