/* eslint-disable react/prop-types */
import React from "react";

export const Button = ({
  cls,
  label,
  handleOnButtonClick,
  handleOnMouseDown,
  isMouseDown,
}) => {
  return (
    <div
      style={
        isMouseDown === label
          ? {
              transform: isMouseDown ? "scale(0.9)" : "scale(1)",
              transition: "transform 0.2s",
            }
          : null
      }
      onMouseDown={() => handleOnMouseDown(label)}
      onClick={() => handleOnButtonClick(label)}
      className={"btn " + cls}
    >
      {label}
    </div>
  );
};
