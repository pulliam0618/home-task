import React, { useState } from "react";
import "../../styles/base/Button.css";

const Button = ({
  width = "100px",
  height = "40px",
  color = "#ffffff",
  onClick,
  textColor = "black",
  textContent = 'Button',
  fontSize = '16px',
  child
}) => {
  const [isHover, setHover] = useState(false);

  return (
    <button
      className="default-button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        width: `${width}`,
        height: `${height}`,
        color: `${isHover ? textColor : color}`,
        border: `1px solid ${color}`,
        transition: "background-color 0.5 ease-in-out",
        backgroundColor: isHover ? color : textColor,
        fontSize: fontSize
      }}
    >
      {child ? child : textContent}
    </button>
  );
};

export default Button;
