import React from 'react'
import { useState } from 'react'
import { GalleryItem } from './GalleryItem'
import { Modal } from './Modal'

const galleryStyles = {
    display: 'grid',
    gridTemplate: '1fr / 1fr 1fr 1fr 1fr',
    gridAutoFlow: 'row',
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    gridGap: 20,
    width: '50%'
}

export const Gallery = (props) => {
    const [currentImage, setCurrentImage] = useState(null)
    const [open, setOpen] = useState(false)

    const openModal = (id) => {
        setCurrentImage(id)
        setOpen(true)
    }

    const closeModal = () => {
        setCurrentImage(null)
        setOpen(false)
    }

    return (
        <div style={galleryStyles}>
            {props.images.filter(image => image.keywords.includes(props.filter)).map((image, index) => (
                <GalleryItem
                    key={index}
                    id={index}
                    title={image.title}
                    desc={image.desc}
                    url={image.url}
                    keywords={image.keywords}
                    openModal={openModal}
                />
            ))}
            <Modal
                open={open}
                currentImageId={currentImage}
                currentImage={props.images[currentImage]}
                numImages={props.images.length - 1}
                closeModal={closeModal}
                incrementModalImage={() => setCurrentImage(prevImage => Math.min(prevImage + 1, props.images.length - 1))}
                decrementModalImage={() => setCurrentImage(prevImage => Math.max(prevImage - 1, 0))}
            />
        </div>
    )
}
