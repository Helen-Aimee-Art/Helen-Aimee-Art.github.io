import React from 'react'
import Carousel from 'react-multi-carousel'
import { createUseStyles, useTheme } from 'react-jss'

const useStyle = createUseStyles(theme => ({
    container: isDesktop => ({
        display: 'flex',
        flexDirection: isDesktop ? 'row' : 'column'
    }),
    details: {
        flex: 1
    },
    carousel: {
        width: '100%',
        flex: 2
    },
    slide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        margin: '0 20px',
        width: '100%',
        height: '100%'
    },
    image: {
        width: '100%',
        height: '100%',
        maxWidth: 250,
        userDrag: 'none',
        objectFit: 'cover'
    }
}))

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1224 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1224, min: 664 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 664, min: 0 },
        items: 1
    }
}

export const CommissionCard = (props) => {
    const { title, details, images, isDesktop } = props
    const theme = useTheme()
    const classes = useStyle(isDesktop, { theme })

    const carousel = (
        <Carousel
            responsive={responsive}
            infinite={true}
            draggable={true}
            itemClass={classes.slide}
            containerClass={classes.carousel}
        >
            {images.map((image, index) => (
                <div className={classes.imageContainer} key={index} >
                    <img className={classes.image} src={image.url} alt="" />
                </div>
            ))}
        </Carousel>
    )

    return (
        <div className={classes.container}>
            {details
                ? <div className={classes.details}>
                    {details}
                </div>
                : null}
            {images.length > 0 && carousel}
        </div>
    )
}