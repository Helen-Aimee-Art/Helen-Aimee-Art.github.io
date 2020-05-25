import React, { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        userSelect: 'none',
        margin: '10px 0'
    },
    bar: ({ open }) => ({
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colorPrimary,
        color: theme.colorSecondary,
        padding: '0px 25px',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: open ? 0 : 5,
        borderBottomRightRadius: open ? 0 : 5,
        cursor: 'pointer',
        boxSizing: 'border-box',
        transition: 'border-radius 0s',
        transitionDelay: open ? '0s' : '0.15s'
    }),
    content: ({ open }) => ({
        width: '100%',
        padding: `${open ? 25 : 0}px 25px`,
        backgroundColor: theme.colorPrimary,
        color: theme.colorSecondary,
        maxHeight: open ? 350 : 0,
        transition: 'max-height 0.15s, padding 0.15s',
        overflow: 'hidden',
        boxSizing: 'border-box',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }),
    arrow: ({ open }) => ({
        width: 25,
        transform: `rotate(${open ? 180 : 0}deg)`,
        transition: 'transform 0.1s'
    })
}))

export const Drawer = (props) => {
    const { title, children, defaultOpen } = props
    const [open, setOpen] = useState(defaultOpen || false)
    const theme = useTheme()
    const classes = useStyles({ open, theme })

    return (
        <div className={classes.root}>
            <div className={classes.bar} onClick={() => setOpen(!open)}>
                <h3>{title}</h3>
                <img className={classes.arrow} src="/down-arrow.png" alt="down arrow" />
            </div>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}