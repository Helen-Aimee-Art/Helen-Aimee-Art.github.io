import React from 'react'
import { About } from './About'
import { Adoptables } from './Adoptables'
import { CommissionInfo } from './CommissionInfo'
import { CommissionForm } from './CommissionForm'
import { CommissionQueue } from './CommissionQueue'
import { Footer } from '../components/Footer'
import { Gallery } from './Gallery'
import { Header } from '../components/Header'
import { Links } from './Links'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    app: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
    const { currentPage, isDesktop, isLargeScreen, isMediumScreen, isSmallScreen, setCurrentPage } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    return (
        <Router>
            <div className={classes.app}>
                <Header currentPage={currentPage} isDesktop={isDesktop} />
                <div className={classes.main}>
                    <Switch>
                        <Route path="/links" render={() => (
                            <Links
                                setCurrentPage={setCurrentPage}
                                isDesktop={isDesktop}
                            />
                        )} />
                        <Route path="/commissioninfo" render={() => (
                            <CommissionInfo
                                setCurrentPage={setCurrentPage}
                                isDesktop={isDesktop}
                            />
                        )} />
                        <Route path="/commissionform" render={() => (
                            <CommissionForm
                                setCurrentPage={setCurrentPage}
                                isDesktop={isDesktop}
                            />
                        )} />
                        <Route path="/commissionqueue" render={() => (
                            <CommissionQueue
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
                        <Route path="/adoptables" render={() => (
                            <Adoptables
                                setCurrentPage={setCurrentPage}
                                isDesktop={isDesktop}
                            />
                        )} />
                        <Route path="/" render={() => (
                            <Gallery
                                setCurrentPage={setCurrentPage}
                                isDesktop={isDesktop}
                                isLargeScreen={isLargeScreen}
                                isMediumScreen={isMediumScreen}
                                isSmallScreen={isSmallScreen}
                            />
                        )} />
                    </Switch>
                </div>
                <Footer isDesktop={isDesktop} currentPage={currentPage} />
            </div>
        </Router>
    )
}