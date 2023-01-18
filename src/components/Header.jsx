import React from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { MobileNavLinks } from './MobileNavLinks'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    nav: isDesktop => ({
        display: 'flex',
        // flexDirection: isDesktop ? 'row' : 'row-reverse',
        flexDirection: 'row',
        justifyContent: isDesktop ? 'space-around' : 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colorPrimary,
        color: theme.colorSecondary,
        width: '100%',
        height: 125,
        borderBottom: '3px solid',
        borderBottomColor: theme.colorTertiary
    })
}))

export const Header = (props) => {
    const isDesktop = props.isDesktop

    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    return (
        <nav className={classes.nav}>
            <Logo currentPage={props.currentPage} />
            {props.currentPage !== 'links'
                ? isDesktop
                    ? (<NavLinks currentPage={props.currentPage} />)
                    : (<MobileNavLinks currentPage={props.currentPage} />)
                : undefined}
        </nav>
    )
}
