import React from 'react'
import { useState } from 'react'

const modalContainerStyles = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
}

const modalStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
}

const imgStyles = {
    height: '100vh'
}

const arrowStyles = {
    position: 'absolute',
    width: 50,
    cursor: 'pointer',
    userSelect: 'none',
    opacity: 0.25,
    transition: 'opacity 0.2s'
}

export const Modal = (props) => {
    const [opacity, setOpacity] = useState(0.25)

    const handleClick = (e) => {
        if (e.currentTarget.id !== "modal-container") {
            return
        }

        props.closeModal()
    }

    const toggleOpacity = () => {
        setOpacity(prevOpacity => prevOpacity === 0.25 ? 1 : 0.25)
    }

    const src = props.currentImage ? props.currentImage.url : ''

    return (
        <div
            id="modal-container"
            style={{ ...modalContainerStyles, display: props.open ? 'block' : 'none' }}
        // onClick={(e) => handleClick(e)}
        >
            <div style={modalStyles}>
                <img style={imgStyles} src={src} alt="" />
                {props.currentImageId > 0 &&
                    <img
                        style={{ ...arrowStyles, left: 0, opacity: opacity }}
                        src="/arrow-left.png"
                        alt="left arrow"
                        onClick={props.decrementModalImage}
                        onMouseEnter={toggleOpacity}
                        onMouseLeave={toggleOpacity}
                    />}
                {props.currentImageId < props.numImages &&
                    <img
                        style={{ ...arrowStyles, right: 0, opacity: opacity }}
                        src="/arrow-right.png"
                        alt="right arrow"
                        onClick={props.incrementModalImage}
                        onMouseEnter={toggleOpacity}
                        onMouseLeave={toggleOpacity}
                    />}
            </div>
        </div>
    )
}
