import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = ({ buttonTitle, action }, ...props) => {
  const [label, setLabel] = useState(buttonTitle);
  const actionV = () => {
    setLabel("Tata");
  };
  return (
    <>
      {" "}
      <h1 onClick={action} className={Style.button}>
        {label}
      </h1>
    </>
  );
};
export default Button;
