import React from 'react'

const style = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1F2833',
        color: '#f2f2f2',
        borderRadius: 5,
        padding: 20
    },
    content: {

    }
}


export const Card = (props) => {
    const { children } = props

    return (
        <div style={style.card}>
            <div style={style.content}>
                {children}
            </div>
        </div>
    )
}