import React from "react";

interface buttonprops{
  text: string;
}
const button: React.FC<buttonprops>=(props)=>{
    return(
  <button>{props.text}</button>
    );
};
export default button;