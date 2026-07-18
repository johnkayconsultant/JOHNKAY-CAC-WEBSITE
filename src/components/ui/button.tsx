import React from "react";

interface Buttonprops{
  text: string;
}
const Button: React.FC<Buttonprops>=(props)=>{
    return(
  <button>{props.text}</button>
    );
};
export default Button;