import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    title: {
        fontSize: 36
    },
    contact: {
        fontSize: 16,
        marginLeft: 2
    }
}))

export const Logo = () => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <Link to="/" className={classes.link}>
            <div className={classes.title}>Helen Aimee Art</div>
            <div className={classes.contact} >helen.aimee.art@gmail.com</div>
        </Link>
    )
}
