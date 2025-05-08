import React from 'react'
import { aboutMeText } from '../configuration/aboutContent'
import { useEffect } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    content: {
        textAlign: 'left',
        width: isDesktop => isDesktop ? '75%' : '100%'
    },
    list: {
        listStyle: 'none'
    },
    listItem: {
        padding: 0,
        margin: '10px 0',
        display: 'flex',
        alignItems: 'center',
        '&:before': {
            content: "'♡'",
            color: theme.colorTertiary,
            fontWeight: 'bold',
            display: 'inline-block',
            width: '1em',
            marginLeft: '-1em',
        }
    },
    image: {
        width: 50,
        height: 'auto',
        marginRight: 10
    },
    clipImage: {
        width: 40,
        height: 'auto',
        marginRight: 10,
        padding: 5
    }
}))

export const About = (props) => {
    const { isDesktop, setCurrentPage } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    useEffect(() => {
        setCurrentPage('about')
    }, [setCurrentPage])

    return (
        <>
            <div className={classes.content}>
                <h2 style={{ marginTop: 0 }}>About me</h2>
                {aboutMeText}
                <h2>Tools and Proficiencies</h2>
                <ul className={classes.list}>
                    <li className={classes.listItem}>Procreate</li>
                    <li className={classes.listItem}>Clip Studio Paint Pro</li>
                    <li className={classes.listItem}>IPad Pro</li>
                    <li className={classes.listItem}>Huion Kamvas Pro 16</li>
                </ul>
            </div>
        </>
    )
}
