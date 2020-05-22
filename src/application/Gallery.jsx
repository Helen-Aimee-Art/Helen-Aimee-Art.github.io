import React from 'react'
import { useEffect, useState } from 'react'
import { GalleryItem } from '../components/GalleryItem'
import { Modal } from '../components/Modal'
import { FilterDropdown } from '../components/FilterDropdown'
import { createUseStyles, useTheme } from 'react-jss'
import { galleryImages } from '../configuration/galleryImages'

const arrays = galleryImages.map(image => image.keywords)
const keywords = ['all'].concat(...arrays).filter((value, index, array) => array.indexOf(value) === index)

const useStyles = createUseStyles(theme => ({
    galleryContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    gallery: {
        display: 'grid',
        gridTemplate: '1fr / 1fr 1fr 1fr 1fr 1fr',
        gridAutoFlow: 'row',
        gridGap: 10
    },
    filterContainer: {
        alignSelf: 'flex-end',
        marginBottom: 5
    }
}))

export const Gallery = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [currentImage, setCurrentImage] = useState(null)
    const [open, setOpen] = useState(false)
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        props.setCurrentPage('gallery')
    }, [])

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
        <>
            <div className={classes.galleryContainer}>
                <div className={classes.filterContainer}>
                    <FilterDropdown keywords={keywords} setFilter={setFilter} />
                </div>
                <div className={classes.gallery}>
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
