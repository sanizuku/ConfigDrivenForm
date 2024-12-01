// LayoutWrapper.js
import React from "react";

const LayoutWrapper = ({ children, gridStyle }) => {
  return <div style={gridStyle}>{children}</div>;
};

export default LayoutWrapper;
