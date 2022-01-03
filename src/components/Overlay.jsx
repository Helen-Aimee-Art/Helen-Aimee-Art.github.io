import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    overlay: ({ opacity }) => ({
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 55%, #282c34)',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        transition: 'opacity 0.25s',
        opacity: opacity
    }),
    overlayContent: {
        color: '#f2f2f2',
        marginLeft: 10,
        marginBottom: 10
    }
}))

export const Overlay = (props) => {
    const theme = useTheme()
    const opacity = props.open ? 1 : 0
    const classes = useStyles({ opacity, theme })

    return (
        <div className={classes.overlay}>
            <div className={classes.overlayContent}>
                {props.title}
            </div>
        </div>
    )
}
