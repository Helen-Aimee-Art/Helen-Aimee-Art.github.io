import { relative } from 'path'
import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    title: {
        margin: 0,
        marginBottom: 5
    },
    content: {
        margin: 0
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colorPrimary,
        color: theme.colorSecondary,
        borderRadius: 5,
        padding: 20
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
}))

export const Dialog = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <div className={classes.dialog}>
            {props.title && <h3 className={classes.title}>{props.title}</h3>}
            <div className={classes.content}>
                {props.children}
            </div>
            <div className={classes.actions}>
                {props.actions}
            </div>
        </div>
    )
}