import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const useStyle = (currentLink) => ({
    ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 3,
        padding: 0
    },
    li: {
        fontSize: 20,
        marginRight: 30,
        padding: '8px',
        borderRadius: '10px'
    },
    gallery: {
        border: currentLink === 'gallery' ? '1px solid #1F2833' : '',
        backgroundColor: currentLink === 'gallery' ? '#f2f2f2' : '#1F2833'
    },
    commission: {
        border: currentLink === 'commission' ? '1px solid #1F2833' : '',
        backgroundColor: currentLink === 'commission' ? '#f2f2f2' : '#1F2833'
    },
    contact: {
        border: currentLink === 'contact' ? '1px solid #1F2833' : '',
        backgroundColor: currentLink === 'contact' ? '#f2f2f2' : '#1F2833'
    },
    about: {
        border: currentLink === 'about' ? '1px solid #1F2833' : '',
        backgroundColor: currentLink === 'about' ? '#f2f2f2' : '#1F2833'
    },
    galleryLink: {
        color: currentLink === 'gallery' ? '#1F2833' : '#f2f2f2'
    },
    commissionLink: {
        color: currentLink === 'commission' ? '#1F2833' : '#f2f2f2'
    },
    contactLink: {
        color: currentLink === 'contact' ? '#1F2833' : '#f2f2f2'
    },
    aboutLink: {
        color: currentLink === 'about' ? '#1F2833' : '#f2f2f2'
    },
    link: {
        textDecoration: 'none',
    }
})

export const NavLinks = () => {
    const [currentLink, setCurrentLink] = useState('gallery')
    const style = useStyle(currentLink)

    return (
        <ul style={style.ul}>
            <li style={{...style.gallery, ...style.li}} onClick={() => setCurrentLink('gallery')}> <Link to='/' style={{...style.link, ...style.galleryLink}}>Gallery</Link></li>
            <li style={{...style.commission, ...style.li}} onClick={() => setCurrentLink('commission')} > <Link to='/commissioninfo' style={{...style.link, ...style.commissionLink}}>Comission Info</Link></li>
            <li style={{...style.contact, ...style.li}} onClick={() => setCurrentLink('contact')}> <Link to='/contact' style={{...style.link, ...style.contactLink}}>Contact</Link></li>
            <li style={{...style.about, ...style.li}} onClick={() => setCurrentLink('about')}><Link to='/about' style={{...style.link, ...style.aboutLink}}>About</Link></li>
        </ul>
    )
}
