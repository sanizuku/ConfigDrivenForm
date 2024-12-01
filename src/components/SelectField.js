import React, { memo } from "react";

const SelectField = ({
  label,
  name,
  value,
  options,
  setFieldValue,

  error,
}) => {
  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "8px",
          margin: "5px 0",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#fff",
        }}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && <span style={{ color: "red", fontSize: "12px" }}>{error}</span>}
    </div>
  );
};

export default memo(SelectField);
