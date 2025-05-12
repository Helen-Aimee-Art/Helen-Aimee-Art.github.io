import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useEffect, useState } from 'react'
import { GalleryViewer } from '../components/GalleryViewer'
import { Modal } from '../components/Modal'
import { FilterMenu } from '../components/FilterMenu'
import { galleryImages } from '../configuration/galleryImages'
import { ScrollToTopButton } from '../components/ScrollToTopButton'
import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 5fr',
        gap: '12px',
        width: '100%'
    },
    image: { cursor: 'pointer' }
}))

const settings = Array.from(new Set(galleryImages.map(image => image.setting))).filter(Boolean)
const imageSizes = Array.from(new Set(galleryImages.map(image => image.imageSize).filter(Boolean)))
const finishes = Array.from(new Set(galleryImages.map(image => image.finish).filter(Boolean)))

export const Gallery = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    const { setCurrentPage } = props
    const [currentImage, setCurrentImage] = useState(null)
    const [open, setOpen] = useState(false)
    const [filters, setFilters] = useState({ settings: [], imageSizes: [], finishes: [], isCommission: null })
    const [filteredImages, setFilteredImages] = useState(galleryImages)

    const isExtraSmallScreen = useMediaQuery('only screen and (max-width:600px)');
    const isSmallScreen = useMediaQuery('only screen and (min-width:600px)');
    const isMediumScreen = useMediaQuery('only screen and (min-width:768px)');
    const isLargeScreen = useMediaQuery('only screen and (min-width:992px)');
    const isExtraLargeScreen = useMediaQuery('only screen and (min-width:1200px)');

    const calculateCols = () => {
        let cols = 0
        if (isExtraLargeScreen) return 5
        if (isLargeScreen) return 4
        if (isMediumScreen) return 3
        if (isSmallScreen) return 2
        if (isExtraSmallScreen) return 1
        return cols
    }

    useEffect(() => {
        setCurrentPage('gallery')
    }, [setCurrentPage])

    useEffect(() => {
        setFilteredImages(galleryImages.filter(image => {
            let isIncluded = true;

            if (filters.settings.length && !filters.settings.includes(image.setting)) {
                isIncluded = false
            }

            if (filters.imageSizes.length && !filters.imageSizes.includes(image.imageSize)) {
                isIncluded = false
            }

            if (filters.finishes.length && !filters.finishes.includes(image.finish)) {
                isIncluded = false
            }

            if (filters.isCommission !== null && filters.isCommission !== image.isCommission) {
                isIncluded = false
            }

            return isIncluded
        }))
    }, [filters])

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
            <div className={classes.container}>
                <FilterMenu settings={settings} imageSizes={imageSizes} finishes={finishes} setFilters={setFilters}></FilterMenu>
                {filteredImages.length > 0 ? <ImageList variant='masonry' sx={{ width: '100%', height: '100%' }} cols={calculateCols()}>
                    {filteredImages.map((item, index) => (
                        <ImageListItem className={classes.image} key={index} onMouseDown={() => openModal(index)}>
                            <img
                                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.url}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="eager"
                            />
                        </ImageListItem>
                    ))}
                </ImageList> : <h3 style={{ width: "100%" }}>The selected filters returned no results.</h3>}
            </div>
            <Modal
                open={open}
                closeModal={closeModal}
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
                    closeModal={closeModal}
                />
            </Modal>
            <ScrollToTopButton />
        </>
    )
}
