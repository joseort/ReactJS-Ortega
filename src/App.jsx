//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter, Routes, Route, Router, Navigate } from 'react-router-dom'
import {Home} from './components/Home/Home'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category/:cid' element={<Home />}/>
        
        <Route path='/detail/:pid' element={ <ItemDetailContainer /> }/>
        <Route path='/cart' element={<CartContainer />}/>

        <Route path='*' element={ <Navigate to='/'/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
