import React from 'react'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useEffect } from 'react'

const useStyles = createUseStyles(theme => ({
    modalContainer: ({ open }) => ({
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: open ? 'block' : 'none',
        zIndex: 2
    }),
    modal: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center'
    },
    imgContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: '85vh',
        position: 'absolute',
    },
    arrow: {
        position: 'absolute',
        width: 75,
        userSelect: 'none',
        opacity: 0.25,
        transition: 'opacity 0.2s',
        backgroundColor: 'black'
    },
    cross: {
        position: 'absolute',
        width: 35,
        height: 35,
        userSelect: 'none',
        opacity: 0.5,
        transition: 'opacity 0.2s',
        backgroundColor: 'black',
        right: 0,
        top: 0,
        borderRadius: '50%'
    }
}))

export const Modal = (props) => {
    const { closeModal, currentImage, currentImageId, decrementModalImage, incrementModalImage, numImages, open } = props
    const theme = useTheme()
    const classes = useStyles({ open, theme })
    const [leftActive, setLeftActive] = useState(false)
    const [rightActive, setRightActive] = useState(false)

    useEffect(() => {
        if (currentImageId === 0) {
            setLeftActive(false)
        }

        if (currentImageId === numImages) {
            setRightActive(false)
        }

    }, [currentImageId, numImages])

    const handleClick = (e) => {
        if (e.target.id === 'modal') {
            closeModal()
        }
    }

    const close = () => {
        closeModal()
        setLeftActive(false)
        setRightActive(false)
    }

    const src = currentImage ? currentImage.url : ''

    return (
        <div
            id="modal-container"
            className={classes.modalContainer}
            onClick={(e) => handleClick(e)}
        >
            <div id="modal" className={classes.modal}>
                <div className={classes.imgContainer}>
                    <img className={classes.img} src={src} alt="" />
                    <img
                        className={classes.arrow}
                        style={{ left: 5, opacity: leftActive ? 1 : 0.25, cursor: leftActive ? 'pointer' : 'default' }}
                        src="/arrow-left.png"
                        alt="left arrow"
                        onClick={currentImageId > 0 && decrementModalImage}
                        onMouseEnter={currentImageId > 0 && (() => setLeftActive(!leftActive))}
                        onMouseLeave={currentImageId > 0 && (() => setLeftActive(!leftActive))}
                    />
                    <img
                        className={classes.arrow}
                        style={{ right: 5, opacity: rightActive ? 1 : 0.25, cursor: rightActive ? 'pointer' : 'default' }}
                        src="/arrow-right.png"
                        alt="right arrow"
                        onClick={currentImageId < numImages && incrementModalImage}
                        onMouseEnter={currentImageId < numImages && (() => setRightActive(!rightActive))}
                        onMouseLeave={currentImageId < numImages && (() => setRightActive(!rightActive))}
                    />
                    <img
                        src="/cross.png"
                        alt="cross"
                        className={classes.cross}
                        onClick={close}
                    />
                </div>
            </div>
        </div>
    )
}
