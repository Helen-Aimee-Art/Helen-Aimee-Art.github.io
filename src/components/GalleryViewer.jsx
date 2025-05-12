import React from 'react'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useEffect } from 'react'

const useStyles = createUseStyles(theme => ({
    imgContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px'
    },
    img: {
        height: '85vh',
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
        borderRadius: '50%',
        cursor: 'pointer',
        '&:hover': {
            opacity: 1
        }
    }
}))

export const GalleryViewer = (props) => {
    const { closeModal, currentImage, currentImageId, decrementImage, incrementImage, numImages } = props
    const theme = useTheme()
    const classes = useStyles(theme)
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

    const close = () => {
        closeModal()
        setLeftActive(false)
        setRightActive(false)
    }

    const src = currentImage ? currentImage.url : ''
    const alt = currentImage ? currentImage.title : ''

    return (
        <div className={classes.imgContainer}>
            <img className={classes.img} src={src} alt={alt} />
            <img
                className={classes.arrow}
                style={{ left: 5, opacity: leftActive ? 1 : 0.25, cursor: leftActive ? 'pointer' : 'default' }}
                src="/arrow-left.png"
                alt="left arrow"
                onClick={currentImageId > 0 ? decrementImage : undefined}
                onMouseEnter={currentImageId > 0 ? (() => setLeftActive(!leftActive)) : undefined}
                onMouseLeave={currentImageId > 0 ? (() => setLeftActive(!leftActive)) : undefined}
            />
            <img
                className={classes.arrow}
                style={{ right: 5, opacity: rightActive ? 1 : 0.25, cursor: rightActive ? 'pointer' : 'default' }}
                src="/arrow-right.png"
                alt="right arrow"
                onClick={currentImageId < numImages ? incrementImage : undefined}
                onMouseEnter={currentImageId < numImages ? (() => setRightActive(!rightActive)) : undefined}
                onMouseLeave={currentImageId < numImages ? (() => setRightActive(!rightActive)) : undefined}
            />
            <img
                src="/cross.png"
                alt="cross"
                className={classes.cross}
                onClick={close}
            />
        </div>
    )
}
