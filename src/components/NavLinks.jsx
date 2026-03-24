import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'

export const links = [
    { route: '/', page: 'gallery', title: 'Gallery' },
    { route: '/commissioninfo', page: 'commissioninfo', title: 'Commission Info' },
    { route: '/commissionform', page: 'commissionform', title: 'Commission Form' },
    { route: '/commissionqueue', page: 'commissionqueue', title: 'Queue' },
    { route: '/about', page: 'about', title: 'About' },
]

const useStyles = createUseStyles(theme => ({
    ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center'
    },
    li: {
        fontSize: 20,
        padding: 3,
    },
    link: {
        textDecoration: 'none',
        color: theme.colorSecondary,
        backgroundColor: theme.colorPrimary,
        borderBottom: '2px solid rgba(0,0,0,0)',
        marginRight: 20,
        '&:hover': {
            color: theme.colorTertiary
        }
    },
    activeLink: {
        textDecoration: 'none',
        color: theme.colorSecondary,
        backgroundColor: theme.colorPrimary,
        borderBottom: '2px solid',
        borderBottomColor: theme.colorTertiary,
        marginRight: 20,
        '&:hover': {
            color: theme.colorTertiary
        }
    }
}))

export const NavLinks = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <ul className={classes.ul}>
            {links.map(link => (
                <Link key={link.route} to={link.route} className={props.currentPage === link.page ? classes.activeLink : classes.link}>
                    <li className={classes.li}>
                        {link.title}
                    </li>
                </Link>
            ))}
        </ul>
    )
}
