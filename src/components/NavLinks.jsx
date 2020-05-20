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
        marginRight: 30,
        padding: '8px',
        borderRadius: '10px'
    },
    link: {
        textDecoration: 'none',
        color: theme.colorSecondary
    }
}))

export const NavLinks = () => {
    const theme = useTheme()
    const [currentLink, setCurrentLink] = useState('gallery')
    const classes = useStyles({ currentLink, theme })

    return (
        <ul className={classes.ul}>
            <Link to='/' className={classes.link}>
                <li className={classes.li} onClick={() => setCurrentLink('gallery')}>
                    Gallery
                </li>
            </Link>
            <Link to='/commissioninfo' className={classes.link}>
                <li className={classes.li} onClick={() => setCurrentLink('commission')}>
                    Comission Info
                </li>
            </Link>
            <Link to='/contact' className={classes.link}>
                <li className={classes.li} onClick={() => setCurrentLink('contact')}>
                    Contact
                </li>
            </Link>
            <Link to='/about' className={classes.link}>
                <li className={classes.li} onClick={() => setCurrentLink('about')}>
                    About
                </li>
            </Link>
        </ul>
    )
}
