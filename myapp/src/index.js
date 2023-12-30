import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const names=[
//   {name1:'Naveen',name2:"Omkirupanjan",},
//   {name1:'Naveen',name2:"Pughaz",},
//   {name1:'Naveen',name2:"Sathish",}
// ]
root.render(
  <React.StrictMode>
    {/* <ul>

    {names.map((names)=> <li><App Name={names}  /></li> )}
    </ul> */}
    
    {/* {
      names.name1!==undefined&&names.name2!==undefined&&names.name3!==undefined ?<App Name={names} Name2="Sathish" />:null
    } */}
    <App />
    
  </React.StrictMode>
);

