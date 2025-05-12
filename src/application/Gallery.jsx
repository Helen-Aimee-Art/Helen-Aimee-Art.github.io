import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useEffect, useState } from 'react'
import { Grid } from '../components/Grid'
import { GalleryItem } from '../components/GalleryItem'
import { GalleryViewer } from '../components/GalleryViewer'
import { Modal } from '../components/Modal'
import { FilterMenu } from '../components/FilterMenu'
import { galleryImages, PER_PAGE } from '../configuration/galleryImages'
import { ScrollToTopButton } from '../components/ScrollToTopButton'

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 5fr',
        gap: '12px'
    }
}))

const tags = Array.from(new Set([].concat(...galleryImages.map(image => image.tags))))
const imageSizes = Array.from(new Set(galleryImages.map(image => image.imageSize).filter(Boolean)))
const finishes = Array.from(new Set(galleryImages.map(image => image.finish).filter(Boolean)))

export const Gallery = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    const { isDesktop, isLargeScreen, isMediumScreen, isSmallScreen, setCurrentPage } = props
    const [currentImage, setCurrentImage] = useState(null)
    const [open, setOpen] = useState(false)
    const [filters, setFilters] = useState({ tags: [], imageSizes: [], finishes: [] })
    const [page, setPage] = useState(1)
    const [canLoadMore, setCanLoadMore] = useState(true)

    useEffect(() => {
        setCurrentPage('gallery')
    }, [setCurrentPage])

    // const filteredImages = filters.length === 0 ? galleryImages : galleryImages.filter(image => filters.every(filter => image.keywords.includes(filter)))
    const filteredImages = galleryImages

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
            <div className={classes.container}>
                <FilterMenu tags={tags} imageSizes={imageSizes} finishes={finishes} setFilters={setFilters}></FilterMenu>
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
            </div>
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
