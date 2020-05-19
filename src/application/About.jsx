import React from 'react'

const style = {
    content: {
        textAlign: 'left'
    },
    socials: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        listStyle: 'none',
        padding: 0,
        width: '75%'
    },
    listItem: {
        flex: 1,
        textAlign: 'center'
    }
}

export const About = () => {

    return (
        <>
            <div style={style.content}>
                <p>
                    My name is Helen and I am a 27 year old Digital Artist living in Plymouth, England with my partner and my pet cat Buttons.
                    I have been drawing for as long as I remember. My passions are painting fantasy portraits and pet portraits.
                </p>
                <p>
                    I did my A levels at art college and I also have a BA (Hons) degree in Game Design. I am now focussing on freelance commissioned work.
                </p>
                <p>
                    Thank you for your interest in my art, I hope you have a great day.
                </p>
                <p>
                    You can find me on the below Social Media platforms:
                </p>
            </div>
            <ul style={style.socials}>
                <li style={style.listItem}><a href="https://www.instagram.com/helen_aimee.art/" target="_blank">Instagram</a></li>
                <li style={style.listItem}><a href="https://www.deviantart.com/missshazira" target="_blank">DeviantArt</a></li>
                <li style={style.listItem}><a href="https://www.artstation.com/helen_aimee" target="_blank">Artstation</a></li>
                <li style={style.listItem}><a href="https://www.youtube.com/channel/UCsJn3W5RUnKKQKwHiMbiFKA" target="_blank">Youtube</a></li>
            </ul>
        </>
    )
}