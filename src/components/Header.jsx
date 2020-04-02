import React from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'

const navStyles = {
    padding: '25px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#282c34',
    color: '#f2f2f2',
    width: '100%'
}

const navContentStyles = {
    display: 'flex',
    width: '65%'
}

export const Header = (props) => {
    return (
        <nav style={navStyles}>
            <div style={navContentStyles}>
                <Logo />
                <NavLinks />
            </div>
        </nav>
    )
}
