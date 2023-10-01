import { useRef } from "react";

const App = () => {
  let myHeadline = useRef();
  const change = () => {
    myHeadline.current.classList.remove("text-success");
    myHeadline.current.classList.add("text-danger");
  }
  return (
    <div>
      <h1 className="text-success" ref={myHeadline}>Hello World!</h1>
      <button onClick={change}>Click</button>
    </div>
  );
};
export default App;