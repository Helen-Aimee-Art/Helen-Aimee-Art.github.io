import React from 'react'
import { useState } from 'react'

const style = {
    modalContainer: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgContainer: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: '85vh'
    },
    arrow: {
        position: 'absolute',
        width: 50,
        cursor: 'pointer',
        userSelect: 'none',
        opacity: 0.25,
        transition: 'opacity 0.2s'
    }
}

export const Modal = (props) => {
    const [leftOpacity, setLeftOpacity] = useState(0.25)
    const [rightOpacity, setRightOpacity] = useState(0.25)

    const handleClick = (e) => {
        if (e.target.id === 'modal') {
            props.closeModal()
            setLeftOpacity(0.25)
            setRightOpacity(0.25)
        }
    }

    const toggleLeftOpacity = () => {
        setLeftOpacity(prevOpacity => prevOpacity === 0.25 ? 1 : 0.25)
    }

    const toggleRightOpacity = () => {
        setRightOpacity(prevOpacity => prevOpacity === 0.25 ? 1 : 0.25)
    }

    const src = props.currentImage ? props.currentImage.url : ''

    return (
        <div
            id="modal-container"
            style={{ ...style.modalContainer, display: props.open ? 'block' : 'none' }}
            onClick={(e) => handleClick(e)}
        >
            <div id="modal" style={style.modal}>
                <div style={style.imgContainer}>
                    <img style={style.img} src={src} alt="" />
                    {props.currentImageId > 0 &&
                        <img
                            style={{ ...style.arrow, left: 0, opacity: leftOpacity }}
                            src="/arrow-left.png"
                            alt="left arrow"
                            onClick={props.decrementModalImage}
                            onMouseEnter={toggleLeftOpacity}
                            onMouseLeave={toggleLeftOpacity}
                        />}
                    {props.currentImageId < props.numImages &&
                        <img
                            style={{ ...style.arrow, right: 0, opacity: rightOpacity }}
                            src="/arrow-right.png"
                            alt="right arrow"
                            onClick={props.incrementModalImage}
                            onMouseEnter={toggleRightOpacity}
                            onMouseLeave={toggleRightOpacity}
                        />}
                </div>
            </div>
        </div>
    )
}
