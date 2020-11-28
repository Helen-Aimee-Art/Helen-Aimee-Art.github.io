import React from 'react'
import { useEffect, useState } from 'react'
import { Grid } from '../components/Grid'
import { GalleryItem } from '../components/GalleryItem'
import { Modal } from '../components/Modal'
import { FilterDropdown } from '../components/FilterDropdown'
import { galleryImages } from '../configuration/galleryImages'

const arrays = galleryImages.map(image => image.keywords)
const keywords = [].concat(...arrays).filter((value, index, array) => array.indexOf(value) === index)

export const Gallery = (props) => {
    const { isDesktop, setCurrentPage } = props
    const [currentImage, setCurrentImage] = useState(null)
    const [open, setOpen] = useState(false)
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        setCurrentPage('gallery')
    }, [setCurrentPage])

    const filteredImages = galleryImages.filter(image => image.keywords.includes(filter))

    const openModal = (id) => {
        setCurrentImage(id)
        setOpen(true)
    }

    const closeModal = () => {
        setCurrentImage(null)
        setOpen(false)
    }

    return (
        <div>
            <FilterDropdown keywords={keywords} setFilter={setFilter} />
            <Grid isDesktop={isDesktop}>
                {filteredImages.map((image, index) => (
                    <GalleryItem
                        key={index}
                        id={index}
                        title={image.title}
                        desc={image.desc}
                        url={image.url}
                        keywords={image.keywords}
                        openModal={openModal}
                        isDesktop={isDesktop}
                    />
                ))}
            </Grid>
            <Modal
                open={open}
                currentImageId={currentImage}
                currentImage={filteredImages[currentImage]}
                numImages={filteredImages.length - 1}
                closeModal={closeModal}
                incrementModalImage={() => setCurrentImage(prevImage => Math.min(prevImage + 1, filteredImages.length - 1))}
                decrementModalImage={() => setCurrentImage(prevImage => Math.max(prevImage - 1, 0))}
                isDesktop={isDesktop}
            />
        </div>
    )
}
