import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route } from "react-router";
import Login from './assets/pages/login.jsx';
import Register from './assets/pages/Register.jsx';
import Protects from './assets/pages/protects.jsx';

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/protects" element={<Protects/>} />
    </Routes>
    </>
  )
}

export default App
