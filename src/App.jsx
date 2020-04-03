import React from 'react'
import { CommissionInfo } from './components/CommissionInfo'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
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
        position: 'relative'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '65%',
        flex: 1,
        backgroundImage: 'linear-gradient(45deg, #ffffff 25%, #fafafa 25%, #fafafa 50%, #ffffff 50%, #ffffff 75%, #fafafa 75%, #fafafa 100%)',
        backgroundSize: '56.57px 56.57px'
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
