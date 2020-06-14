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
        display: open ? 'block' : 'none'
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
    const isDesktop = props.isDesktop
    const open = props.open
    const theme = useTheme()
    const classes = useStyles({ open, theme })
    const [leftActive, setLeftActive] = useState(false)
    const [rightActive, setRightActive] = useState(false)

    useEffect(() => {
        if (props.currentImageId === 0) {
            setLeftActive(false)
        }

        if (props.currentImageId === props.numImages) {
            setRightActive(false)
        }

    }, [props.currentImageId])

    const handleClick = (e) => {
        if (e.target.id === 'modal') {
            closeModal()
        }
    }

    const closeModal = () => {
        props.closeModal()
        setLeftActive(false)
        setRightActive(false)
    }

    const src = props.currentImage ? props.currentImage.url : ''

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
                        onClick={props.currentImageId > 0 && props.decrementModalImage}
                        onMouseEnter={props.currentImageId > 0 && (() => setLeftActive(!leftActive))}
                        onMouseLeave={props.currentImageId > 0 && (() => setLeftActive(!leftActive))}
                    />
                    <img
                        className={classes.arrow}
                        style={{ right: 5, opacity: rightActive ? 1 : 0.25, cursor: rightActive ? 'pointer' : 'default' }}
                        src="/arrow-right.png"
                        alt="right arrow"
                        onClick={props.currentImageId < props.numImages && props.incrementModalImage}
                        onMouseEnter={props.currentImageId < props.numImages && (() => setRightActive(!rightActive))}
                        onMouseLeave={props.currentImageId < props.numImages && (() => setRightActive(!rightActive))}
                    />
                    <img
                        src="/cross.png"
                        alt="cross"
                        className={classes.cross}
                        onClick={closeModal}
                    />
                </div>
            </div>
        </div>
    )
}
