import React from 'react'
import { SocialList } from './SocialList'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    footer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorSecondary,
        backgroundColor: theme.colorPrimary,
        height: 80,
        borderTop: '3px solid',
        borderTopColor: theme.colorTertiary
    }
}))

export const Footer = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    return (
        <footer className={classes.footer}>
            <SocialList />
        </footer>
    )
}
