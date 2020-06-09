import React from 'react'
import { SocialLink } from './SocialLink'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    ul: {
        display: 'flex',
        listStyle: 'none',
        width: '25%',
        justifyContent: 'space-around'
    }
}))

export const SocialList = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <ul className={classes.ul}>
            <SocialLink link="https://www.instagram.com/helen_aimee.art/"></SocialLink>
            <SocialLink link="https://www.deviantart.com/missshazira"></SocialLink>
            <SocialLink link="https://www.artstation.com/helen_aimee"></SocialLink>
            <SocialLink link="https://www.youtube.com/channel/UCsJn3W5RUnKKQKwHiMbiFKA"></SocialLink>
        </ul>
    )
}