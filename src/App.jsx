//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import {Home} from './components/Home/Home'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Wellcome to React" />
    </>
  )
}

export default App