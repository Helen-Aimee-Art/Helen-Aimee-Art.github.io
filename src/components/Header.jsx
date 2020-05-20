import React from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    nav: {
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.colorPrimary,
        color: theme.colorSecondary,
        width: '100%'
    },
    navContent: {
        display: 'flex',
        width: '65%'
    }
}))

export const Header = () => {
    const theme = useTheme()
    const classes = useStyles(theme)
    
    return (
        <nav className={classes.nav}>
            <div className={classes.navContent}>
                <Logo />
                <NavLinks />
            </div>
        </nav>
    )
}
