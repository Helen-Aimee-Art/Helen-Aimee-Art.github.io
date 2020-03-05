import React from 'react'
import { CommissionInfo } from './components/CommissionInfo'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'

import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <CommissionInfo />
      <Footer />
    </div>
  );
}
