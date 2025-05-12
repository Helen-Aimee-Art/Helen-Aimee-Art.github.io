import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useEffect, useState } from 'react'
import { GalleryViewer } from '../components/GalleryViewer'
import { Modal } from '../components/Modal'
import { FilterMenu } from '../components/FilterMenu'
import { galleryImages } from '../configuration/galleryImages'
import { ScrollToTopButton } from '../components/ScrollToTopButton'
import { Drawer, ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import { Button } from '../components/Button'
import { Overlay } from '../components/Overlay'

const useStyles = createUseStyles(theme => ({
    container: (isExtraSmallScreen) => ({
        display: 'grid',
        gridTemplateColumns: isExtraSmallScreen ? '1fr' : '1fr 5fr',
        gap: '12px',
        width: '100%'
    }),
    image: { cursor: 'pointer' }
}))

const universes = Array.from(new Set(galleryImages.map(image => image.universe))).filter(Boolean)
const imageSizes = Array.from(new Set(galleryImages.map(image => image.imageSize).filter(Boolean)))
const finishes = Array.from(new Set(galleryImages.map(image => image.finish).filter(Boolean)))

export const Gallery = (props) => {
    const isExtraSmallScreen = useMediaQuery('only screen and (max-width:600px)');
    const isSmallScreen = useMediaQuery('only screen and (min-width:600px)');
    const isMediumScreen = useMediaQuery('only screen and (min-width:768px)');
    const isLargeScreen = useMediaQuery('only screen and (min-width:992px)');
    const isExtraLargeScreen = useMediaQuery('only screen and (min-width:1200px)');

    const theme = useTheme()
    const classes = useStyles(isExtraSmallScreen, { theme })

    const { setCurrentPage } = props
    const [currentImage, setCurrentImage] = useState(null)
    const [open, setOpen] = useState(false)
    const [filters, setFilters] = useState({ universes: [], imageSizes: [], finishes: [], isCommission: false })
    const [filteredImages, setFilteredImages] = useState(galleryImages)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [hoveredImage, setHoveredImage] = useState(null)

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

            if (filters.universes.length && !filters.universes.includes(image.universe)) {
                isIncluded = false
            }

            if (filters.imageSizes.length && !filters.imageSizes.includes(image.imageSize)) {
                isIncluded = false
            }

            if (filters.finishes.length && !filters.finishes.includes(image.finish)) {
                isIncluded = false
            }

            if (filters.isCommission && !image.isCommission) {
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

    const toggleDrawer = (newOpen) => () => {
        setDrawerOpen(newOpen);
    };

    return (
        <>
            {isExtraSmallScreen && <Button alignSelf="flex-start" margin="0 0 8px 0" label="Filter" click={toggleDrawer(true)}></Button>}
            <div className={classes.container}>
                {!isExtraSmallScreen && <FilterMenu universes={universes} imageSizes={imageSizes} finishes={finishes} setFilters={setFilters}></FilterMenu>}
                {filteredImages.length > 0 ? <ImageList variant='masonry' sx={{ width: '100%', height: '100%', marginTop: 0 }} cols={calculateCols()}>
                    {filteredImages.map((item, index) => (
                        <ImageListItem className={classes.image} key={index} onMouseDown={() => openModal(index)} onMouseEnter={() => setHoveredImage(index)} onMouseLeave={() => setHoveredImage(null)}>
                            <img
                                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.url}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="eager"
                            />
                            <Overlay title={item.title} open={hoveredImage === index} />
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
            <Drawer open={drawerOpen} onClose={toggleDrawer(false)} keepMounted>
                <FilterMenu margin="8px" universes={universes} imageSizes={imageSizes} finishes={finishes} setFilters={setFilters}></FilterMenu>
            </Drawer>
        </>
    )
}
