import React from "react";

const CheckboxField = ({ label, name, options, value, setFieldValue }) => {
  const handleChange = (e) => {
    setFieldValue(name, e.target.checked);
  };

  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="checkbox"
            id={option.value}
            name={name}
            checked={value}
            onChange={handleChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxField;
