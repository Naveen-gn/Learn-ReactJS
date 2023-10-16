import './App.css';
import Car from './Components/Car';


function App() {
  const name1="Propertie1";
  const name2="Propertie2";
  return (
    <>
    <h1>First App</h1>
    <Car Name1={name1} Name2={name2} />
   
    </>
    
  );
}

export default App;
