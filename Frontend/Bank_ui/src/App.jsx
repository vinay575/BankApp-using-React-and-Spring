import { useState } from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css'
import Register from './Components/log-sup/Register';
import Login from './Components/log-sup/Login';
import Home from './Components/Home';
import AddBankAccount from './Components/AddBankAccount';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hOmEpAgE" element={<Home />} />
          <Route path="/add-bank-account" element={<AddBankAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
