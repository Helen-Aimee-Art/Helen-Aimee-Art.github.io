import React from 'react'
import { SocialList } from '../components/SocialList'
import { useEffect } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    content: {
        textAlign: 'left',
        width: '75%'
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        display: 'block',
        height: 150,
        width: 150,
        objectFit: 'cover',
        borderRadius: '50%',
        padding: 10
    }
}))

export const About = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    useEffect(() => {
        props.setCurrentPage('about')
    }, [])

    return (
        <>
            <div className={classes.content}>
                <p>
                    My name is Helen and I am a 27 year old Digital Artist living in Plymouth, England with my partner and my pet cat Buttons.
                    I have been drawing for as long as I remember. My passions are painting fantasy portraits and pet portraits.
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
                <p>
                    You can find me on the below Social Media platforms:
                </p>
            </div>
            <SocialList />
        </>
    )
}