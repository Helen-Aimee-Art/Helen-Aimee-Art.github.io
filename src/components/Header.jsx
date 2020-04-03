import React from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'

const style = {
    nav: {
        padding: '25px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#282c34',
        color: '#f2f2f2',
        width: '100%'
    },
    navContent: {
        display: 'flex',
        width: '65%'
    }
}

export const Header = (props) => {
    return (
        <nav style={style.nav}>
            <div style={style.navContent}>
                <Logo />
                <NavLinks />
            </div>
        </nav>
    )
}
