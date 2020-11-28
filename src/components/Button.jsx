import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    button: {
        backgroundColor: theme.colorTertiary,
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        color: 'rgba(0, 0, 0, 0.87)',
        padding: '6px 16px',
        minWidth: 64,
        boxSizing: 'border-box',
        fontWeight: 600,
        lineHeight: 1.75,
        fontSize: '0.875rem',
        letterSpacing: '0.02857em',
        borderRadius: 4,
        textTransform: 'uppercase',
        border: 0,
        cursor: 'pointer',
        display: 'inline-flex',
        outline: 0,
        position: 'relative',
        alignItems: 'center',
        userSelect: 'none',
        verticalAlign: 'middle',
        justifyContent: 'center',
        textDecoration: 'none',
        textAlign: 'center',
        margin: 8,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        '&:hover': {
            opacity: 0.8
        },
        '&:active': {
            opacity: 0.5
        }
    }
}))

export const Button = (props) => {
    const { label, click } = props
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <button className={classes.button} onClick={click}>{label}</button>
    )
}