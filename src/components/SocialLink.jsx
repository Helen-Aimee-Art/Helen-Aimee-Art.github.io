import React from 'react'
import { useState } from 'react'
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
        borderColor: active => active ? theme.colorTertiary : 'inherit',
        padding: 10,
        minWidth: 20,
        minHeight: 20,
        fontSize: 15,
        margin: 0,
        borderRadius: '50%',
        color: active => active ? theme.colorTertiary : 'inherit'
    }
}))

export const SocialLink = (props) => {
    const theme = useTheme()
    const [active, setActive] = useState(false)
    const classes = useStyles(active, { theme })

    const handleHover = () => setActive(!active)

    return (
        <div className={classes.container}>
            <a href={props.link} target="_blank" className={classes.a}>
                <li className={classes.li} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    {props.children ? props.children : props.link.charAt(12).toUpperCase()}
                </li>
            </a>
        </div>
    )
}