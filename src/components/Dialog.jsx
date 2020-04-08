import React from 'react'

const style = {
    clickAway: {
        position: 'absolute',
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    title: {
        margin: 0,
        marginBottom: 5
    },
    content: {
        margin: 0
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1F2833',
        color: '#f2f2f2',
        borderRadius: 5,
        padding: 20
    }, actions: {

    }
}

export const Dialog = (props) => {
    const { open, onClose, title, content, actions } = props

    return (
        <div
            style={{ ...style.clickAway, display: open === true ? 'flex' : 'none' }}
            onClick={onClose}
        >
            <div style={style.dialog}>
                {title && <h3 style={style.title}>{title}</h3>}
                <p style={style.content}>{content}</p>
                <div style={style.actions}>
                    {actions}
                </div>
            </div>
        </div>
    )
}