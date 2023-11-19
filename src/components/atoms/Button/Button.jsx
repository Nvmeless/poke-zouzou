import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = ({ buttonTitle, action, ...props }) => {
  const [label, setLabel] = useState(buttonTitle);
  return (
    <>
      <span className="nes-pointer">
        <h1 onClick={action} className={Style.button}>
          {label}
        </h1>
      </span>
    </>
  );
};
export default Button;
