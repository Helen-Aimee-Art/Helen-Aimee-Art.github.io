import React from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { MobileNavLinks } from './MobileNavLinks'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    nav: {
        display: 'flex',
        position: 'relative',
        justifyContent: isDesktop => isDesktop ? 'space-around' : 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colorPrimary,
        color: theme.colorSecondary,
        width: '100%'
    }
}))

export const Header = (props) => {
    const isDesktop = props.isDesktop

    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    return (
        <nav className={classes.nav}>
            <Logo />
            {isDesktop ?
                (<NavLinks currentPage={props.currentPage} />)
                : (<MobileNavLinks currentPage={props.currentPage} />)}
        </nav>
    )
}
