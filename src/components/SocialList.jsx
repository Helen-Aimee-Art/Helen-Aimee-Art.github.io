import React from 'react'
import { Instagram, YouTube, X } from '@mui/icons-material'
import { SocialLink } from './SocialLink'
import { SvgIcon } from '@mui/material'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(props => ({
    socials: {
        display: 'flex',
        margin: props => props.mini ? '10px 0' : 0
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

const Kofi = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                fill="currentColor" d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
        </SvgIcon>
    )
}

const Redbubble = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                d="M16.633 16.324h-3.199a.321.321 0 0 1-.32-.322V7.974a.32.32 0 0 1 .32-.32H16.4c2.226 0 2.693 1.31 2.693 2.408 0 .636-.169 1.14-.504 1.511.816.337 1.256 1.096 1.256 2.194 0 1.601-1.201 2.557-3.212 2.557m-4.644 0H5.345a.32.32 0 0 1-.32-.322V7.974a.32.32 0 0 1 .32-.32h3.103c1.939 0 3.096 1.043 3.096 2.791 0 1.163-.585 2.077-1.527 2.448l2.21 2.897a.322.322 0 0 1-.24.533M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12S18.63 0 12.001 0" />
        </SvgIcon>
    )
}

const Bluesky = (props) => {
    return (
        <SvgIcon {...props}>
            <svg width="24"
                height="24"
                viewBox="0 0 576 512">
                <path

                    fill="currentColor"
                    d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"
                />
            </svg>

        </SvgIcon>
    )
}

export const SocialList = (props) => {
    const theme = useTheme()
    const classes = useStyles(props)

    return (
        <div className={classes.socials}>
            <SocialLink link="https://www.twitter.com/HelenAimeeArt/" title="X (Twitter)" mini={!!props.mini} noLeftPadding>
                <X />
            </SocialLink>
            <SocialLink link="https://bsky.app/profile/helenaimeeart.bsky.social" title="Bluesky" mini={!!props.mini}>
                <Bluesky />
            </SocialLink>
            <SocialLink link="https://www.instagram.com/helenaimeeart/" title="Instagram" mini={!!props.mini}>
                <Instagram />
            </SocialLink>
            <SocialLink link="https://www.deviantart.com/helenaimeeart" title="DeviantArt" mini={!!props.mini}>
                <DeviantArt />
            </SocialLink>
            <SocialLink link="https://www.artstation.com/helen_aimee" title="ArtStation" mini={!!props.mini}>
                <ArtStation />
            </SocialLink>
            <SocialLink link="https://www.youtube.com/channel/UCsJn3W5RUnKKQKwHiMbiFKA" title="YouTube" mini={!!props.mini}>
                <YouTube />
            </SocialLink>
            <SocialLink link="https://ko-fi.com/helenaimeeart" title="Ko-fi" mini={!!props.mini}>
                <Kofi />
            </SocialLink>
            <SocialLink link="https://www.redbubble.com/people/helenaimee/shop?asc=u" title="Redbubble" mini={!!props.mini}>
                <Redbubble />
            </SocialLink>
        </div >
    )
}