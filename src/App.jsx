import { useRef } from "react";
const App = () => {
  let imgUrl = useRef();
  const changeImg = () => {
    imgUrl.current.src = "https://images.pexels.com/photos/11361962/pexels-photo-11361962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    imgUrl.current.setAttribute("height", "200px");
    imgUrl.current.setAttribute("Width", "300px");
  }
  return (
    <div>
      <button onClick={changeImg} >Change</button>
      <br /> 
      <br />
      <img ref={imgUrl} src="https://media.istockphoto.com/id/495732397/photo/black-wi-fi-router.jpg?s=2048x2048&w=is&k=20&c=eZm9tBPt2LSQynquJi6eGc5ZfbB_fZixofaQI-VqC5A=" height="400px" width="500px" alt="" />
    </div>
  );
};
export default App;