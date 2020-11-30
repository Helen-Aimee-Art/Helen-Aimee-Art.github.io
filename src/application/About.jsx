import React from 'react'
import { useEffect } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    content: {
        textAlign: 'left',
        width: isDesktop => isDesktop ? '75%' : '100%'
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: isDesktop => ({
        display: 'block',
        height: isDesktop ? 150 : 75,
        width: isDesktop ? 150 : 75,
        borderRadius: '50%',
        margin: 10,
        border: '5px solid',
        borderColor: theme.colorTertiary,
        objectFit: 'cover',
        objectPosition: '100% 0%'
    }),
    ul: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0
    },
    li: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 0
    },
    a: {
        textDecoration: 'none',
        color: 'inherit'
    },
}))

export const About = (props) => {
    const { isDesktop, setCurrentPage } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    useEffect(() => {
        setCurrentPage('about')
    }, [setCurrentPage])

    const now = new Date()
    const dateBorn = 1993
    const myAge = now.getFullYear() - dateBorn

    return (
        <>
            <div className={classes.content}>
                <p>
                    My name is Helen and I am a {myAge} year old Digital Artist living in Plymouth, England with my partner and my pet cat Buttons.
                    I have been drawing for as long as I can remember. My passions are painting fantasy portraits and pet portraits.
                </p>
                <p>
                    I did my A levels at art college and I also have a BA (Hons) degree in Game Design. I am now focussing on freelance commissioned work.
                </p>
                <p>
                    Thank you for your interest in my art, I hope you have a great day!
                </p>
                <div className={classes.images}>
                    <img src="/helen.jpg" alt="Helen" className={classes.image} />
                    <img src="/buttons.jpg" alt="Buttons" className={classes.image} />
                </div>
            </div>
        </>
    )
}
