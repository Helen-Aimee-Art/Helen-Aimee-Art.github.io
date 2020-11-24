import React from 'react'
import { About } from './About'
import { CommissionInfo } from './CommissionInfo'
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
        boxSizing: 'border-box'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: isDesktop => isDesktop ? '65%' : '90%',
        flex: 1,
        margin: '25px 0'
    }
}))

export const Layout = (props) => {
    const { currentPage, isDesktop, setCurrentPage } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    return (
        <Router>
            <div className={classes.app}>
                <Header currentPage={currentPage} isDesktop={isDesktop} />
                <div className={classes.main}>
                    <Switch>
                        <Route path="/commissioninfo" render={() => (
                            <CommissionInfo
                                setCurrentPage={setCurrentPage}
                                isDesktop={isDesktop}
                            />
                        )} />
                        <Route path="/about" render={() => (
                            <About
                                setCurrentPage={setCurrentPage}
                                isDesktop={isDesktop}
                            />
                        )} />
                        <Route path="/" render={() => (
                            <Gallery
                                setCurrentPage={setCurrentPage}
                                isDesktop={isDesktop}
                            />
                        )} />
                    </Switch>
                </div>
                <Footer isDesktop={isDesktop} />
            </div>
        </Router>
    )
}