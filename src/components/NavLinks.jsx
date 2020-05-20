import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 3,
        padding: 0
    },
    li: {
        fontSize: 20,
        padding: '8px',
        borderRadius: '10px'
    },
    link: {
        textDecoration: 'none',
        color: theme.colorSecondary,
        marginRight: 20
    },
    activeLink: {
        textDecoration: 'none',
        color: theme.colorPrimary,
        backgroundColor: theme.colorSecondary,
        borderRadius: 10,
        marginRight: 20
    }
}))

export const NavLinks = () => {
    const theme = useTheme()
    const [currentLink, setCurrentLink] = useState('gallery')
    const classes = useStyles({ currentLink, theme })

    return (
        <ul className={classes.ul}>
            <Link to='/' className={currentLink === 'gallery' ? classes.activeLink : classes.link}>
                <li className={classes.li} onClick={() => setCurrentLink('gallery')}>
                    Gallery
                </li>
            </Link>
            <Link to='/commissioninfo' className={currentLink === 'commission' ? classes.activeLink : classes.link}>
                <li className={classes.li} onClick={() => setCurrentLink('commission')}>
                    Comission Info
                </li>
            </Link>
            <Link to='/contact' className={currentLink === 'contact' ? classes.activeLink : classes.link}>
                <li className={classes.li} onClick={() => setCurrentLink('contact')}>
                    Contact
                </li>
            </Link>
            <Link to='/about' className={currentLink === 'about' ? classes.activeLink : classes.link}>
                <li className={classes.li} onClick={() => setCurrentLink('about')}>
                    About
                </li>
            </Link>
        </ul>
    )
}
