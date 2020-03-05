import React from 'react'

const logoStyles = {
    flex: 1,
    textAlign: 'left',
}

const imgStyles = {
    margin: '0 20px',
    borderRadius: '50%',
    width: 100
}

const aStyles = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center'
}

const contactStyles = {
    fontSize: 16,
    marginLeft: 2
}

const h1Style = {
    marginBottom: 0,
    fontSize: 36
}

export const Logo = () => {
    return (
        <div styles={logoStyles}>
            <a href="#" style={aStyles}>
                <img src="/helen.jpg" alt="Helen" style={imgStyles} />
                <div>
                    <h1 style={h1Style}>Helen Aimee Art</h1>
                    <span style={contactStyles} >example@example.com</span>
                </div>
            </a>
        </div>
    )
}
