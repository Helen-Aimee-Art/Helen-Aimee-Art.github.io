import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'
import { useState } from 'react'

const useStyles = createUseStyles(theme => ({
    ul: {
        listStyle: 'none',
        position: 'absolute',
        left: 0,
        top: 80,
        backgroundColor: theme.colorPrimary,
        zIndex: 1,
        padding: 0,
        margin: 0,
        borderRight: `2px solid ${theme.colorPrimary}`,
        width: active => active ? 175 : 0,
        height: 'calc(100% - 160px)',
        transition: 'width 0.2s ease'
    },
    li: {
        fontSize: 20,
        padding: '15px 5px',
        width: 175,
        color: theme.colorSecondary,
        display: active => active ? 'block' : 'none',
        overflow: 'hidden',
        transition: '0.2s ease'
    },
    activeLi: {
        fontSize: 20,
        padding: '15px 5px',
        width: 170,
        color: theme.colorPrimary,
        backgroundColor: theme.colorSecondary,
        display: active => active ? 'block' : 'none',
        overflow: 'hidden',
        transition: '0.2s ease'
    },
    link: {
        textDecoration: 'none',
    },
    burger: {
        width: 32,
        marginLeft: 10
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
        </>
    )
}
