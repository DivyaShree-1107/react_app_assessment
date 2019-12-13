import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Reg from './Components/Reg';
import Login from './Components/Login';
import AddUser from './Components/AddUser';
import { HomePage } from './Components/HomePage/HomePage';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { RegisterPage } from './Components/Register/Register';


function App() {
  return (
    <div className="App">
      
     <Router>
       <switch>
         {/* <Route exact path='/' component={AddUser}></Route>
          <Route exact path='/reg' component={Reg}></Route>
         <Route exact path='/login' component={Login}></Route> */}
         <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/loginpage' component={LoginPage}></Route>
         <Route exact path='/register' component={RegisterPage}></Route>
         
     
         </switch>
     </Router>
    </div>
  );
}

export default App;
