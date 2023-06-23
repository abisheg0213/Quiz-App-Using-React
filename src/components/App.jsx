import React from "react";
import Answers from "./Answers";
import QandA from "./QandA";
import questions from "./QuestionDB";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [currentqno, setqno] = React.useState(0);
  let noofques = questions.length;
  const [score, updatescore] = React.useState(0);
  function calcualte_Score(q, a) {
    // console.log("called **");
    if (Answers[q] === a) {
      console.log("********))))))");
      let y = score + 1;
      console.log("y=" + y);
      updatescore(y);
    }
  }
  function increval() {
    console.log("called ***");
    if (currentqno <= noofques - 2) {
      console.log(":::");
      let y = currentqno + 1;
      setqno(y);
    }
  }
  function createQuestion(data) {
    console.log(questions);
    console.log("****");
    return (
      <QandA
        ques={data.question}
        opa={data.a}
        opb={data.b}
        opc={data.c}
        opd={data.d}
        calsoc={calcualte_Score}
      />
    );
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <p>{createQuestion(questions[currentqno])}</p>

              <br />
              <button onClick={increval}>Next</button>
              <button>
                <Link to="/result">Sumbit Test</Link>
              </button>
            </div>
          }
        ></Route>
        <Route
          path="/result"
          element={
            <div>
              <h1>Ur score is {score} / 3</h1>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
