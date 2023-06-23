import React from "react";
import Option from "./Option";
function QandA(props) {
  const [optionclicked, setoption] = React.useState("");
  function set(event) {
    setoption(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <h2>{props.ques}</h2>
      <div>
        <input type="radio" name="answer" value="opa" onChange={set}></input>
        {props.opa}
      </div>
      <div>
        <input type="radio" name="answer" value="opb" onChange={set}></input>
        {props.opb}
      </div>
      <div>
        <input type="radio" name="answer" value="opc" onChange={set}></input>
        {props.opc}
      </div>
      <div>
        <input type="radio" name="answer" value="opd" onChange={set}></input>
        {props.opd}
      </div>
      <button
        onClick={(event) => {
          props.calsoc(props.ques, optionclicked);
          event.preventDefault();
        }}
      >
        Sumbit
      </button>
      <br />
    </div>
  );
}
export default QandA;
