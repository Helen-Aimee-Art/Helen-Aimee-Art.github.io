import React from 'react'
import { Link } from 'react-router-dom'

const style = {
    logo: {
        flex: 1,
        textAlign: 'left',
    },
    img: {
        margin: '0 20px',
        borderRadius: '50%',
        width: 100
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        alignItems: 'center'
    },
    contact: {
        fontSize: 16,
        marginLeft: 2
    },
    h1: {
        marginBottom: 0,
        fontSize: 36
    }
}

export const Logo = () => {
    return (
        <div styles={style.logo}>
            <Link to="/" style={style.link}>
                <img src="/helen.jpg" alt="Helen" style={style.img} />
                <div>
                    <h1 style={style.h1}>Helen Aimee Art</h1>
                    <span style={style.contact} >example@example.com</span>
                </div>
            </Link>
        </div>
    )
}
