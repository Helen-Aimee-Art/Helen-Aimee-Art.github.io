import React from 'react'
import { useState } from 'react'
import { GalleryItem } from './GalleryItem'
import { Modal } from './Modal'
import { FilterDropdown } from './FilterDropdown'

const galleryContainerStyles = {
    display: 'flex',
    flexDirection: 'column'
}
const galleryStyles = {
    display: 'grid',
    gridTemplate: '1fr / 1fr 1fr 1fr 1fr 1fr',
    gridAutoFlow: 'row',
    gridGap: 10
}

const filterContainerStyles = {
    alignSelf: 'flex-end',
    marginBottom: 5
}

export const Gallery = (props) => {
    const [currentImage, setCurrentImage] = useState(null)
    const [open, setOpen] = useState(false)

    const filteredImages = props.images.filter(image => image.keywords.includes(props.filter))

    const openModal = (id) => {
        setCurrentImage(id)
        setOpen(true)
    }

    const closeModal = () => {
        setCurrentImage(null)
        setOpen(false)
    }

    return (
        <>
            <h1>Gallery</h1>
            <div style={galleryContainerStyles}>
                <div style={filterContainerStyles}>
                    <FilterDropdown keywords={props.keywords} setFilter={props.setFilter} />
                </div>
                <div style={galleryStyles}>
                    {filteredImages.map((image, index) => (
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
                        currentImage={filteredImages[currentImage]}
                        numImages={filteredImages.length - 1}
                        closeModal={closeModal}
                        incrementModalImage={() => setCurrentImage(prevImage => Math.min(prevImage + 1, filteredImages.length - 1))}
                        decrementModalImage={() => setCurrentImage(prevImage => Math.max(prevImage - 1, 0))}
                    />
                </div>
            </div>
        </>
    )
}
