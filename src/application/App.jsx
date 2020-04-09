import React from 'react'
import { CommissionInfo } from './CommissionInfo'
import { Contact } from './Contact'
import { Footer } from '../components/Footer'
import { Gallery } from './Gallery'
import { Header } from '../components/Header'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const style = {
    app: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        position: 'relative',
        // backgroundImage: 'linear-gradient(45deg, #ffffff 25%, #fafafa 25%, #fafafa 50%, #ffffff 50%, #ffffff 75%, #fafafa 75%, #fafafa 100%)',
        backgroundColor: '#F2F2F2',
        backgroundSize: '56.57px 56.57px',
        boxSizing: 'border-box'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '65%',
        flex: 1,
        margin: '20px 0'
    }
}

export const App = () => {
    return (
        <Router>
            <div style={style.app}>
                <Header />
                <div style={style.main}>
                    <Switch>
                        <Route path="/commissioninfo" render={() => (
                            <CommissionInfo />
                        )} />
                        <Route path="/contact" render={() => (
                            <Contact />
                        )} />
                        <Route path="/" render={() => (
                            <Gallery />
                        )} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
