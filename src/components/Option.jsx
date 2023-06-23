import React from "react";
function Option(props) {
  return (
    <div>
      <input type="radio" name="answer"></input>
      <label>{props.data}</label>
    </div>
  );
}
export default Option;
