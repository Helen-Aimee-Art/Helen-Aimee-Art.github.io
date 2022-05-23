import React from 'react'
import { links } from '../configuration/links'
import { useEffect } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        width: '100%'
    },
    link: {
        fontWeight: 'bold',
        color: theme.colorPrimary,
        border: '2px solid',
        borderColor: theme.colorPrimary,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colorTertiary
        }
    },
    a: {
        height: '60px',
        width: '100%',
        maxWidth: '600px',
        textDecoration: 'none',
        color: 'inherit'
    }
}))

export const Links = (props) => {
    const { isDesktop, setCurrentPage } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    useEffect(() => {
        setCurrentPage('links')
    }, [setCurrentPage])

    return (
        <>
            <div className={classes.content}>
                {links.map((link, index) => (
                    <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className={classes.a}>
                        <div className={classes.link}>
                            {link.title}
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}
