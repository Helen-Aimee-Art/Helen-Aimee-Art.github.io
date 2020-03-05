import React from 'react'

const footerStyles = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f2f2f2',
    backgroundColor: '#282c34'
}

const ulStyles = {
    display: 'flex',
    listStyle: 'none',
    width: '25%',
    justifyContent: 'space-around'
}

const aStyles = {
    textDecoration: 'none',
    color: 'inherit'
}

export const Footer = () => {
    return (
        <footer style={footerStyles}>
            <ul style={ulStyles}>
                <a href="https://www.instagram.com/helen_aimee.art/" target="_blank" style={aStyles}>
                    <li>Instagram</li>
                </a>
                <a href="https://www.deviantart.com/missshazira" target="_blank" style={aStyles}>
                    <li>DeviantArt</li>
                </a>
                <a href="https://www.artstation.com/helen_aimee" target="_blank" style={aStyles}>
                    <li>Artstation</li>
                </a>
            </ul>
        </footer>
    )
}
