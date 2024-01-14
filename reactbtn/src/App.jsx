import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 0
  const addValue = ()=>{
    setCounter(counter + 1)
//     counter++
// console.log("value added", counter);
  }
  const removeValue = ()=>{
    setCounter(counter - 1)
    // counter--
    // console.log("value removed", counter);
      }
  return (
    <>
      <h1>Simple React Counter Button Project</h1>
      <h2>Counter Value : {counter} </h2>
      <button
      onClick={addValue}
      >Add Value</button><br />
      <button 
      onClick={removeValue}
      >Remove Value</button>
    </>
  );
}

export default App;
