import './App.css';
import { useState } from 'react';
function App() {
  const [obj,setobj]=useState({
    name:'apple',
    year:'2000',
    price:'100000',
    Model:'2023'
  })

 function changeValue(){
  setobj(
    (PreValues)=>{
      return {...PreValues, name:'Samsung'}
    }
  )
 }

  return (
    <div>
      <h1>Name: {obj.name}</h1>
      <h1>Year: {obj.year}</h1>
      <h1>Price: {obj.price}</h1>
      <h1>Model: {obj.Model}</h1>
      <button onClick={()=>{changeValue()}} >Change Name</button>
      
    </div>
  );
}

export default App;
