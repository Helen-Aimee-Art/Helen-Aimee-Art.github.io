import React from 'react'

const style = {
    footer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f2f2f2',
        backgroundColor: '#282c34'
    },
    ul: {
        display: 'flex',
        listStyle: 'none',
        width: '25%',
        justifyContent: 'space-around'
    },
    a: {
        textDecoration: 'none',
        color: 'inherit'
    }
}

export const Footer = () => {
    return (
        <footer style={style.footer}>
            <ul style={style.ul}>
                <a href="https://www.instagram.com/helen_aimee.art/" target="_blank" style={style.a}>
                    <li>Instagram</li>
                </a>
                <a href="https://www.deviantart.com/missshazira" target="_blank" style={style.a}>
                    <li>DeviantArt</li>
                </a>
                <a href="https://www.artstation.com/helen_aimee" target="_blank" style={style.a}>
                    <li>Artstation</li>
                </a>
            </ul>
        </footer>
    )
}
