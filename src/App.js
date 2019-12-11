import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Reg from './Components/Reg';
// import Login from './Components/Login';

function App() {
  return (
    <div className="App">
     <Router>
       <switch>
         <Route exact path='/' component={Reg}></Route>
         {/* <Route exact path='/reg' component={Reg}></Route> */}
         {/* <Route exact path='/task4' component={Task4}></Route> */}
         {/* <Route exact path='/task5' component={Task5}></Route> */}
         {/* <Route exact path='/task6' component={Task6}></Route> */}
         </switch>
     </Router>
    </div>
  );
}

export default App;
