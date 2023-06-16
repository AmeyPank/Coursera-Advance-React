import React from 'react'
import Switch from "./Switch/Switch"
import From from './Components/From';
import { ThemeProvider } from "./Context/ThemeContext";
import './App.css';
const App = () => {


  return (
    <ThemeProvider>
      <Switch />
      <From />
    </ThemeProvider>
  )
}

export default App