import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    logo: {
        flex: 1,
        textAlign: 'left',
    },
    img: {
        margin: '0 20px',
        borderRadius: '50%',
        width: 100
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        alignItems: 'center'
    },
    contact: {
        fontSize: 16,
        marginLeft: 2
    },
    h1: {
        marginBottom: 0,
        fontSize: 36
    }
}))

export const Logo = () => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <div className={classes.logo}>
            <Link to="/" className={classes.link}>
                <img src="/helen.jpg" alt="Helen" className={classes.img} />
                <div>
                    <h1 className={classes.h1}>Helen Aimee Art</h1>
                    <span className={classes.contact} >helen.aimee.art@gmail.com</span>
                </div>
            </Link>
        </div>
    )
}
