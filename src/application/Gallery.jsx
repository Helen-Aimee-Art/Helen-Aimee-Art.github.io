import React from 'react'
import { useEffect, useState } from 'react'
import { Grid } from '../components/Grid'
import { GalleryItem } from '../components/GalleryItem'
import { GalleryViewer } from '../components/GalleryViewer'
import { Modal } from '../components/Modal'
import { FilterDropdown } from '../components/FilterDropdown'
import { galleryImages, PER_PAGE } from '../configuration/galleryImages'
import { ScrollToTopButton } from '../components/ScrollToTopButton'

const arrays = galleryImages.map(image => image.keywords)
const keywords = [].concat(...arrays).filter((value, index, array) => array.indexOf(value) === index && value !== 'all')
keywords.unshift('all')

export const Gallery = (props) => {
    const { isDesktop, isLargeScreen, isMediumScreen, isSmallScreen, setCurrentPage } = props
    const [currentImage, setCurrentImage] = useState(null)
    const [open, setOpen] = useState(false)
    const [filter, setFilter] = useState('all')
    const [page, setPage] = useState(1)
    const [canLoadMore, setCanLoadMore] = useState(true)

    useEffect(() => {
        setCurrentPage('gallery')
    }, [setCurrentPage])

    const filteredImages = galleryImages.filter(image => image.keywords.includes(filter))

    const checkScroll = () => {
        if (
            ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 50) &&
            canLoadMore &&
            (page * PER_PAGE < filteredImages.length)
        ) {
            setPage(page + 1)
            setCanLoadMore(false)
            setTimeout(() => setCanLoadMore(true), 100)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScroll)

        return () => window.removeEventListener('scroll', checkScroll)
    })

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
            <Grid
                isDesktop={isDesktop}
                isLargeScreen={isLargeScreen}
                isMediumScreen={isMediumScreen}
                isSmallScreen={isSmallScreen}
            >
                {filteredImages.slice(0, page * PER_PAGE).map((image, index) => (
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
                closeModal={closeModal}
                isDesktop={isDesktop}
            >
                <GalleryViewer
                    currentImageId={currentImage}
                    currentImage={filteredImages[currentImage]}
                    numImages={filteredImages.length - 1}
                    incrementImage={(e) => {
                        e.preventDefault()
                        setCurrentImage(prevImage => Math.min(prevImage + 1, filteredImages.length - 1))
                    }}
                    decrementImage={(e) => {
                        e.preventDefault()
                        setCurrentImage(prevImage => Math.max(prevImage - 1, 0))
                    }}
                    isDesktop={isDesktop}
                    closeModal={closeModal}
                />
            </Modal>
            <ScrollToTopButton />
        </div >
    )
}
