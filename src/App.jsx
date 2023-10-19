import { useRef, useState } from "react";

const App = () => {
  let [myObj, setMyObj] = useState({
    name: "Nayeem Khan",
    age: 25,
    work: "Front-end Developer"
  })

  let change = () => {
    setMyObj({
        name: "Zioun Khan",
        age: 25,
        work: "Front-end Developer"
      })
  }
  return (
    <div>
      <h1>My name is: {myObj.name}</h1>
      <button onClick={change}>Change</button>
    </div>
  );
};
export default App;