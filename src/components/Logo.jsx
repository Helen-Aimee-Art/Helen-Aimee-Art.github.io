import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => ({
    container: {
        textAlign: (props) => props.currentPage !== 'links' ? 'left' : 'center',
        padding: '0 10px'
    },
    mainLink: {
        textDecoration: 'none',
        color: 'inherit'
    },
    link: {
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

export const Logo = (props) => {
    const classes = useStyles(props)

    return (
        <div className={classes.container}>
            <Link to="/" className={classes.mainLink}>
                <div className={classes.title}>Helen Aimee Art</div>
            </Link>
            <div className={classes.contact} >
                <a href="mailto:helen.aimee.art@gmail.com" className={classes.link}>helen.aimee.art@gmail.com</a>
            </div>
        </div>
    )
}
