import React, { useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");


  useDocumentTitle(`${name} has clicked ${counter} times`);

  const counterHandler = (count) => {
    setCounter(count);
  };
  const inputHandler = (event) => {
    setName(event.target.value);
  };

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  return (
    <React.Fragment>
      <input type="text" onChange={(event) => inputHandler(event)} />
      <div>
        {name} has clicked {counter} times
      </div>
      <button onClick={() => counterHandler(counter + 1)}>Increase</button>
    </React.Fragment>
  );
};

export default Counter;
