import React from 'react'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    a: {
        textDecoration: 'none',
        color: 'inherit'
    },
    li: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: active => `1px solid ${active ? theme.colorTertiary : theme.colorSecondary}`,
        padding: 10,
        minWidth: 20,
        minHeight: 20,
        fontSize: 15,
        margin: 0,
        borderRadius: '50%',
        color: active => active ? theme.colorTertiary : theme.colorSecondary
    }
}))

export const SocialLink = (props) => {
    const theme = useTheme()
    const [active, setActive] = useState(false)
    const classes = useStyles(active, { theme })

    const handleHover = () => setActive(!active)

    return (
        <a href={props.link} target="_blank" className={classes.a}>
            <li className={classes.li} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                {props.children ? props.children : props.link.charAt(12).toUpperCase()}
            </li>
        </a>
    )
}