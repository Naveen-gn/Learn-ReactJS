import './App.css';
import { useState } from 'react';
function App() {
  const [count,setcount]=useState(1)
  function increasevalue(){
    setcount(count+1)
  }
  function decreasevalue(){
    setcount(count-1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>increasevalue()} >Increase</button>
      <button onClick={()=>decreasevalue()} >Decrease</button>
    </div>
  );
}

export default App;
