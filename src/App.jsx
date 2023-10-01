import { useRef } from "react";

const App = () => {
  let myNumber = useRef(0);
  const change = () => {
    myNumber.current++;
    console.log(myNumber.current);
  }
  
  return (
    <div>
      <button onClick={change}>Click</button>
    </div>
  );
};
export default App;