import React from 'react'
import { SocialList } from './SocialList'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    footer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorSecondary,
        backgroundColor: theme.colorPrimary,
        height: 100,
        borderTop: '3px solid',
        borderTopColor: theme.colorTertiary,
    },
    copyright: {
        fontSize: 12,
        fontWeight: 'bold',
        '&>p': {
            margin: 0,
            paddingTop: 15
        }
    }
}))

export const Footer = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    return (
        <footer className={classes.footer}>
            {props.currentPage !== 'links' ? <SocialList /> : null}
            <div className={classes.copyright}>
                <p>{`© ${new Date().getFullYear()} Helen Aimee Art. All rights reserved.`}</p>
            </div>
        </footer>
    )
}
