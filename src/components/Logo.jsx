import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        padding: '0 10px'
    },
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
        <div className={classes.container}>
            <Link to="/" className={classes.link}>
                <div className={classes.title}>Helen Aimee Art</div>
            </Link>
            <div className={classes.contact} >
                <a href="mailto:helen.aimee.art@gmail.com" className={classes.link}>helen.aimee.art@gmail.com</a>
            </div>
        </div>
    )
}
