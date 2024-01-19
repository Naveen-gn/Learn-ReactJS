import './App.css';
import Home from './Components/HomePage';
import About from './Components/AboutPage';
import Contact from './Components/ContactPage';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
function App() {
  
  return (
<>
    <Router>
    <ul>
        <li> <Link to='/' >Home</Link> </li>
        <li> <Link to='/about' >About</Link> </li>
        <li> <Link to='/contact' >Contact</Link> </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>

</>    
    

    
  );
}
export default App;
