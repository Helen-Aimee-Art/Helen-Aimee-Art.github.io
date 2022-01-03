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
        alignItems: 'center'
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
                    <li className={classes.listItem}>
                        <img src="/photoshop.png" alt="Photoshop icon" className={classes.image} />
                        <span>Adobe Photoshop</span>
                    </li>
                    <li className={classes.listItem}>
                        <img src="/clipstudio.png" alt="Clip Studio Paint Pro icon" className={classes.clipImage} />
                        <span>Clip Studio Paint Pro</span>
                    </li>
                    <li className={classes.listItem}>
                        <img src="/wacom.png" alt="Wacom icon" className={classes.image} />
                        <span>Wacom Cintiq 27QHD</span>
                    </li>
                    <li className={classes.listItem}>
                        <img src="/microsoft.png" alt="Microsoft icon" className={classes.image} />
                        <span>Microsoft Surface Pro 7</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
