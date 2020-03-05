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

const mainStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    backgroundImage: 'linear-gradient(45deg, #ffffff 25%, #fafafa 25%, #fafafa 50%, #ffffff 50%, #ffffff 75%, #fafafa 75%, #fafafa 100%)',
    backgroundSize: '56.57px 56.57px'
}

export const App = () => {
    return (
        <div style={appStyles}>
            <Header />
            <div style={mainStyles}>
                <Gallery />
                {/* <CommissionInfo /> */}
            </div>
            <Footer />
        </div>
    );
}
