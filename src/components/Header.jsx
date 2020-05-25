import React from 'react'
import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { MobileNavLinks } from './MobileNavLinks'
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
        width: isDesktop => isDesktop ? '65%' : '100%'
    }
}))

export const Header = (props) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1450)
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 1450)
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia)

        return () => window.removeEventListener('resize', updateMedia)
    })

    return (
        <nav className={classes.nav}>
            <div className={classes.navContent}>
                <Logo />
                {isDesktop ?
                    (<NavLinks currentPage={props.currentPage} />)
                    : (<MobileNavLinks />)}
            </div>
        </nav>
    )
}
