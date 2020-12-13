import React from 'react'
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

    const now = new Date()
    const dateBorn = new Date(1993, 2, 9)
    let years = now.getFullYear() - dateBorn.getFullYear()
    if (now.getMonth() < dateBorn.getMonth() || now.getMonth() === dateBorn.getMonth() && now.getDate() < dateBorn.getDate()) {
        years--;
    }

    return (
        <>
            <div className={classes.content}>
                <h2 style={{ marginTop: 0 }}>About me</h2>
                <p>
                    My name is Helen and I am a {years} year old Digital Artist living in Plymouth, England with my partner and my pet cat Buttons.
                    I have been drawing for as long as I can remember. My passions are painting fantasy portraits and pet portraits.
                </p>
                <p>
                    I did my A levels at art college and I also have a BA (Hons) degree in Game Design. I am now focussing on freelance commissioned work.
                </p>
                <p>
                    Thank you for your interest in my art, I hope you have a great day!
                </p>
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
