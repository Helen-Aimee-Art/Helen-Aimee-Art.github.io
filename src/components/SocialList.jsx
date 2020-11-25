import React from 'react'
import { Instagram, Twitter, YouTube } from '@material-ui/icons'
import { SocialLink } from './SocialLink'
import { SvgIcon } from '@material-ui/core'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    socials: {
        display: 'flex'
    },
    icon: {
        width: '100%',
        height: '100%',
        color: 'red'
    }
}))

const DeviantArt = (props) => {
    return (
        <SvgIcon {...props}>
            <path fill="currentColor" d="M6,6H12L14,2H18V6L14.5,13H18V18H12L10,22H6V18L9.5,11H6V6Z" />
        </SvgIcon>
    )
}

const ArtStation = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                fill="currentColor" d="M1.77,16.88L3.5,19.86C3.84,20.54 4.54,21 5.33,21H16.79L14.43,16.88H1.77M22.23,16.9C22.23,16.5 22.11,16.11 21.9,15.78L15.17,4.1C14.82,3.44 14.15,3 13.35,3H9.8L20.18,21L21.82,18.14C22.13,17.6 22.23,17.36 22.23,16.9M12.73,13.94L8.1,5.92L3.45,13.94H12.73Z" />
        </SvgIcon>
    )
}

export const SocialList = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <div className={classes.socials}>
            <SocialLink link="https://www.twitter.com/helenaimee1/" title="Twitter">
                <Twitter />
            </SocialLink>
            <SocialLink link="https://www.instagram.com/helen_aimee.art/" title="Instagram">
                <Instagram />
            </SocialLink>
            <SocialLink link="https://www.deviantart.com/missshazira" title="DeviantArt">
                <DeviantArt />
            </SocialLink>
            <SocialLink link="https://www.artstation.com/helen_aimee" title="ArtStation">
                <ArtStation />
            </SocialLink>
            <SocialLink link="https://www.youtube.com/channel/UCsJn3W5RUnKKQKwHiMbiFKA" title="YouTube">
                <YouTube />
            </SocialLink>
        </div >
    )
}