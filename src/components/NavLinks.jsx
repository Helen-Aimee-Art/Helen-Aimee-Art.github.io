import React from 'react'
import { Link } from 'react-router-dom'

const style = {
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
        marginRight: 30
    },
    link: {
        textDecoration: 'none',
        color: '#f2f2f2'
    }
}

export const NavLinks = () => {
    return (
        <ul style={style.ul}>
            <li style={style.li}><Link to='/' style={style.link}>Gallery</Link></li>
            <li style={style.li}><Link to='/commissioninfo' style={style.link}>Comission Info</Link></li>
        </ul>
    )
}
