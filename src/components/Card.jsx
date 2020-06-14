import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.colorPrimary,
        color: theme.colorSecondary,
        borderRadius: 5,
        padding: 20,
        width: '100%'
    }
}))

export const Card = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const { children } = props

    return (
        <div className={classes.card}>
            {children}
        </div>
    )
}