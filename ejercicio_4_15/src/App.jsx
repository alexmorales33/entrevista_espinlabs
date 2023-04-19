import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountryTable from './components/CountryTable';

function App() {
  const countries = [
    {
      code: 'ARG',
      name: 'Argentina'
    },
    {
      code: 'FR',
      name: 'Francia'
    },
    {
      code: 'EU',
      name: 'Estados Unidos'
    },
  ];

  return (
    <div className="App">
      <h1>Países</h1>
      <CountryTable countries={countries} />
    </div>
  )
}

export default App
