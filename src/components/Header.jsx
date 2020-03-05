import React from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'

const navStyles = {
    padding: '25px 0',
    display: 'flex',
    backgroundColor: '#282c34',
    color: '#f2f2f2',
    width: '100%'
}

export const Header = () => {
    return (
        <nav style={navStyles}>
            <Logo />
            <NavLinks />
        </nav>
    )
}
