import React from 'react'
import { About } from './About'
import { CommissionInfo } from './CommissionInfo'
import { Contact } from './Contact'
import { Footer } from '../components/Footer'
import { Gallery } from './Gallery'
import { Header } from '../components/Header'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    app: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        position: 'relative',
        backgroundColor: theme.colorSecondary,
        backgroundSize: '56.57px 56.57px',
        boxSizing: 'border-box'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '65%',
        flex: 1,
        margin: '25px 0'
    }
}))

export const Layout = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <Router>
            <div className={classes.app}>
                <Header currentPage={props.currentPage} />
                <div className={classes.main}>
                    <Switch>
                        <Route path="/commissioninfo" render={() => (
                            <CommissionInfo setCurrentPage={props.setCurrentPage} />
                        )} />
                        <Route path="/contact" render={() => (
                            <Contact setCurrentPage={props.setCurrentPage} />
                        )} />
                        <Route path="/about" render={() => (
                            <About setCurrentPage={props.setCurrentPage} />
                        )} />
                        <Route path="/" render={() => (
                            <Gallery setCurrentPage={props.setCurrentPage} />
                        )} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    )
}