import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        padding: '0 5px'
    },
    a: {
        textDecoration: 'none',
        color: 'inherit'
    },
    li: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '1px',
        borderStyle: 'solid',
        width: 50,
        height: 50,
        fontSize: 15,
        margin: 0,
        borderRadius: '50%',
        '&:hover': {
            color: theme.colorTertiary,
            borderColor: theme.colorTertiary
        }
    }
}))

export const SocialLink = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <div className={classes.container}>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className={classes.a}>
                <li className={classes.li}>
                    {props.children ? props.children : props.link.charAt(12).toUpperCase()}
                </li>
            </a>
        </div>
    )
}