import React, { memo } from "react";

const TextField = ({ label, name, value, setFieldValue, text, error }) => {
  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={text}
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
        }}
      />
      {error && <span style={{ color: "red", fontSize: "12px" }}>{error}</span>}
    </div>
  );
};

export default memo(TextField);
