import React from 'react'
import { useState } from 'react'
import { GalleryItem } from '../components/GalleryItem'
import { Modal } from '../components/Modal'
import { FilterDropdown } from '../components/FilterDropdown'
import { createUseStyles, useTheme } from 'react-jss'

const galleryImages = [
    {
        title: 'Serana',
        desc: '',
        url: '/helen-aimee-serana.jpg',
        keywords: ['all', 'skyrim', 'gaming', 'fantasy']
    },
    {
        title: 'Ribbon',
        desc: '',
        url: '/helen-aimee-ribbon.jpg',
        keywords: ['all', 'warcraft', 'gaming', 'fantasy']
    },
    {
        title: 'Flameleaf',
        desc: '',
        url: '/helen-aimee-flameleaf.jpg',
        keywords: ['all', 'warcraft', 'gaming', 'fantasy']
    },
    {
        title: 'Darkshift',
        desc: '',
        url: '/helen-aimee-darkshift-web.jpg',
        keywords: ['all', 'warcraft', 'gaming', 'fantasy']
    },
    {
        title: 'Neefia',
        desc: '',
        url: '/helen-aimee-neefia.jpg',
        keywords: ['all', 'warcraft', 'gaming', 'fantasy']
    },
    {
        title: 'Kait Diaz',
        desc: '',
        url: '/helen-aimee-kait-diaz.jpg',
        keywords: ['all', 'gaming']
    },
    {
        title: 'Juliette',
        desc: '',
        url: '/helen-aimee-juliette.jpg',
        keywords: ['all', 'gaming']
    },
    {
        title: 'Blue and Quincy',
        desc: '',
        url: '/helen-aimee-blue-and-quincy-c.jpg',
        keywords: ['all', 'pets', 'commissions']
    },
    {
        title: 'Sorceress',
        desc: '',
        url: '/helen-aimee-sorceressrgbweb.jpg',
        keywords: ['all', 'fantasy']
    }
]

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

export const Gallery = () => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [currentImage, setCurrentImage] = useState(null)
    const [open, setOpen] = useState(false)
    const [filter, setFilter] = useState('all')

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