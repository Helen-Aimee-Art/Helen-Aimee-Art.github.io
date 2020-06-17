import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    clickAway: props => ({
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        alignItems: props.align,
        justifyContent: 'center',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: props.open ? 'flex' : 'none'
    }),
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
        padding: 20,
    },
    actions: {

    }
}))

export const Dialog = (props) => {
    const theme = useTheme()
    const classes = useStyles({ ...props, theme })

    return (
        <div
            className={classes.clickAway}
            onClick={props.onClose}
        >
            <div className={classes.dialog}>
                {props.title && <h3 className={classes.title}>{props.title}</h3>}
                <p className={classes.content}>{props.content}</p>
                <div className={classes.actions}>
                    {props.actions}
                </div>
            </div>
        </div>
    )
}