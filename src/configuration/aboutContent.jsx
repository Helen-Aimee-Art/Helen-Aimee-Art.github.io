import React from 'react'

const now = new Date()
const dateBorn = new Date(1993, 3, 9)
let years = now.getFullYear() - dateBorn.getFullYear()

if (now.getMonth() < dateBorn.getMonth() || (now.getMonth() === dateBorn.getMonth() && now.getDate() < dateBorn.getDate())) {
    years--;
}

export const aboutMeText = (
    <>
        <p>
            My name is Helen and I am a {years} year old Digital Artist living in the United Kingdom with my partner and 3 cats. I have been drawing for as long as I can remember. My favourite things to do are paint fantasy portraits, bake and play video games!
        </p>
        <p>
            I did my A levels at an art college and I also have a university degree in Game Design. I am now focussing on freelance commission work.
        </p>
        <p>
            Thank you for your interest in my art, I hope you have a great day!
        </p>
    </>
)