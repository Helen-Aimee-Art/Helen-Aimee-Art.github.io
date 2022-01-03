import React from 'react'

const now = new Date()
const dateBorn = new Date(1993, 2, 9)
let years = now.getFullYear() - dateBorn.getFullYear()

if (now.getMonth() < dateBorn.getMonth() || (now.getMonth() === dateBorn.getMonth() && now.getDate() < dateBorn.getDate())) {
    years--;
}

export const aboutMeText = (
    <>
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
    </>
)