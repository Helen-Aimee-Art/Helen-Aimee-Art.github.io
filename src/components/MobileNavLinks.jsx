import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'
import { useState } from 'react'

const useStyles = createUseStyles(theme => ({
    container: {
        position: 'relative'
    },
    ul: {
        listStyle: 'none',
        position: 'absolute',
        right: 0,
        top: 48,
        backgroundColor: theme.colorPrimary,
        zIndex: 10,
        padding: 0,
        margin: 0,
        borderLeft: `2px solid ${theme.colorTertiary}`,
        width: 175
    },
    li: {
        fontSize: 20,
        padding: 15,
        color: theme.colorSecondary
    },
    activeLi: {
        fontSize: 20,
        padding: 15,
        color: theme.colorPrimary,
        backgroundColor: theme.colorSecondary
    },
    link: {
        textDecoration: 'none',
    },
    burger: {
        width: 32,
        marginRight: 10
    }
}))

export const MobileNavLinks = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [active, setActive] = useState(false)

    return (
        <div className={classes.container}>
            <img src="/Hamburger_icon.png" alt="" onClick={() => setActive(!active)} className={classes.burger} />
            {active && (
                <ul className={classes.ul}>
                    <Link to='/' className={classes.link} onClick={() => setActive(false)}>
                        <li className={props.currentPage === 'gallery' ? classes.activeLi : classes.li}>
                            Gallery
                        </li>
                    </Link>
                    <Link to='/commissioninfo' className={classes.link} onClick={() => setActive(false)} >
                        <li className={props.currentPage === 'commissioninfo' ? classes.activeLi : classes.li}>
                            Comission Info
                        </li>
                    </Link>
                    <Link to='/contact' className={classes.link} onClick={() => setActive(false)} >
                        <li className={props.currentPage === 'contact' ? classes.activeLi : classes.li}>
                            Contact
                        </li>
                    </Link>
                    <Link to='/about' className={classes.link} onClick={() => setActive(false)} >
                        <li className={props.currentPage === 'about' ? classes.activeLi : classes.li}>
                            About
                        </li>
                    </Link>
                </ul>
            )}
        </div>
    )
}
