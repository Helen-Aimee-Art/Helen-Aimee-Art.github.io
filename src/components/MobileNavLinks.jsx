import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'
import { useState } from 'react'

const useStyles = createUseStyles(theme => ({
    container: {

    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 3,
        padding: 0,
        backgroundColor: theme.colorPrimary,
        zIndex: 10
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
    },
    burger: {
        width: 64
    }
}))

export const MobileNavLinks = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [active, setActive] = useState(false)

    return (
        <div>
            <img src="/Hamburger_icon.png" alt="" onClick={() => setActive(!active)} className={classes.burger}/>
            {active && (
                <ul className={classes.ul}>
                    <Link to='/' className={props.currentPage === 'gallery' ? classes.activeLink : classes.link}>
                        <li className={classes.li}>
                            Gallery
                </li>
                    </Link>
                    <Link to='/commissioninfo' className={props.currentPage === 'commissioninfo' ? classes.activeLink : classes.link}>
                        <li className={classes.li}>
                            Comission Info
                </li>
                    </Link>
                    <Link to='/contact' className={props.currentPage === 'contact' ? classes.activeLink : classes.link}>
                        <li className={classes.li}>
                            Contact
                </li>
                    </Link>
                    <Link to='/about' className={props.currentPage === 'about' ? classes.activeLink : classes.link}>
                        <li className={classes.li}>
                            About
                </li>
                    </Link>
                </ul>
            )}
        </div>
    )
}
