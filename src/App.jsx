import { useRef } from "react";

const App = () => {

  let myHandaling = useRef();
  
  const change = () => {
    myHandaling.innerText = "Hello World!";
  }
  return (
    <div>
      <button onClick={change} >Change</button>
      <h1 ref={(h1) => myHandaling = h1}>Hello Barishal!</h1>
    </div>
  );
};

export default App;