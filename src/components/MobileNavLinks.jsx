import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'
import { useState } from 'react'

const useStyles = createUseStyles(theme => ({
    ul: {
        listStyle: 'none',
        position: 'absolute',
        right: 0,
        top: 100,
        backgroundColor: theme.colorPrimary,
        zIndex: 1,
        padding: 0,
        margin: 0,
        width: active => active ? 175 : 0,
        height: 'calc(100% - 200px)',
        transition: 'width 0.25s ease'
    },
    li: {
        fontSize: 20,
        padding: '15px 10px',
        width: 150,
        color: theme.colorSecondary,
        display: active => active ? 'block' : 'none',
        overflow: 'hidden',
        transition: '0.2s ease',
        borderLeft: '5px solid rgba(0, 0, 0, 0)'
    },
    activeLi: {
        fontSize: 20,
        padding: '15px 10px',
        width: 150,
        color: theme.colorSecondary,
        display: active => active ? 'block' : 'none',
        overflow: 'hidden',
        transition: '0.2s ease',
        borderLeft: '5px solid',
        borderLeftColor: theme.colorTertiary
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
    const [active, setActive] = useState(false)
    const classes = useStyles(active, { theme })

    return (
        <>
            <img src="/Hamburger_icon.png" alt="" onClick={() => setActive(!active)} className={classes.burger} />
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
                <Link to='/about' className={classes.link} onClick={() => setActive(false)} >
                    <li className={props.currentPage === 'about' ? classes.activeLi : classes.li}>
                        About
                    </li>
                </Link>
            </ul>
        </>
    )
}
