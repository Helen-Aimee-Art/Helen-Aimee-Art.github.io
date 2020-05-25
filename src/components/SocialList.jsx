import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    ul: {
        display: 'flex',
        listStyle: 'none',
        width: '25%',
        justifyContent: 'space-around'
    },
    a: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

export const SocialList = () => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <ul className={classes.ul}>
            <a href="https://www.instagram.com/helen_aimee.art/" target="_blank" className={classes.a}>
                <li>Instagram</li>
            </a>
            <a href="https://www.deviantart.com/missshazira" target="_blank" className={classes.a}>
                <li>DeviantArt</li>
            </a>
            <a href="https://www.artstation.com/helen_aimee" target="_blank" className={classes.a}>
                <li>Artstation</li>
            </a>
            <a href="https://www.youtube.com/channel/UCsJn3W5RUnKKQKwHiMbiFKA" target="_blank" className={classes.a}>
                <li>Youtube</li>
            </a>
        </ul>
    )
}