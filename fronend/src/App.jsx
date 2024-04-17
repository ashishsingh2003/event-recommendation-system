import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Home from './Pages/Home';
import Addevent from './Pages/Addevent';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';
import Show from './Pages/Show';
import Edit from './Pages/Edit';

function App() {


  return (
    <div>
      <div><Navbar/></div>
      <div>
   
      
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addevent" element={<Addevent/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/Show/:id" element={<Show/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
      </Routes>
     
 
    </div>
    </div>
  )
}

export default App
