import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    clickAway: {
        position: 'absolute',
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
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
        backgroundColor: '#1F2833',
        color: '#f2f2f2',
        borderRadius: 5,
        padding: 20
    }, actions: {

    }
}))

export const Dialog = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const { open, onClose, title, content, actions } = props

    return (
        <div
            className={classes.clickAway}
            style={{ display: open === true ? 'flex' : 'none' }}
            onClick={onClose}
        >
            <div className={classes.dialog}>
                {title && <h3 className={classes.title}>{title}</h3>}
                <p className={classes.content}>{content}</p>
                <div className={classes.actions}>
                    {actions}
                </div>
            </div>
        </div>
    )
}