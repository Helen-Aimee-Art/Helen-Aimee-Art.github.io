import React from 'react'

const style = {
    overlay: {
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 55%, #282c34)',
        position: 'absolute',
        top: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        transition: 'opacity 0.2s'
    },
    overlayContent: {
        color: '#f2f2f2',
        marginLeft: 10,
        marginBottom: 10
    }
}

export const Overlay = (props) => {
    const opacity = props.open ? 1 : 0

    return (
        <div style={{ ...style.overlay, opacity: opacity }}>
            <div style={style.overlayContent}>
                {props.title}
            </div>
        </div>
    )
}
