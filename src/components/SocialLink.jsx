import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: props => ({
        padding: props.noLeftPadding ? '0 5px 0 0' : '0 5px'
    }),
    a: {
        textDecoration: 'none',
        color: 'inherit',
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
    },
    aMini: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '1px',
        borderStyle: 'solid',
        width: 32,
        height: 32,
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
    const classes = useStyles(props, { theme })

    return (
        <div className={classes.container} title={props.title}>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className={props.mini ? classes.aMini : classes.a}>
                {props.children ? props.children : props.link.charAt(12).toUpperCase()}
            </a>
        </div>
    )
}