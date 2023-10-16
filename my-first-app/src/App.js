import './App.css';
import Car from './Components/Car';


function App() {
  const name="Naveen";
  return (
    <>
    <h1>First App</h1>
    <Car Name={name} />
   
    </>
    
  );
}

export default App;
