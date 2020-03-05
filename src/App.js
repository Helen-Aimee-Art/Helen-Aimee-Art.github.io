import React from 'react'
import { CommissionInfo } from './components/CommissionInfo'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'

const appStyles = {
  fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
}

export const App = () => {
  return (
    <div style={appStyles}>
      <Header />
      <Gallery />
      <CommissionInfo />
      <Footer />
    </div>
  );
}
