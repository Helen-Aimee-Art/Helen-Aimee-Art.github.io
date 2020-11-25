import React from 'react'
import { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    arrow: {
        width: 50,
        userSelect: 'none',
        opacity: 0.25,
        transition: 'opacity 0.2s',
        '&:hover': {
            opacity: 1
        }
    },
    imageContainer: isDesktop => ({
        width: 200,
        height: 290
    }),
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}))

export const Carousel = (props) => {
    const { images, isDesktop } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })
    const [activeItemIndex, setActiveItemIndex] = useState(0)

    return (
        <ItemsCarousel
            infiniteLoop={true}
            activePosition={'center'}
            disableSwipe={false}
            slidesToScroll={1}
            showSlither={!isDesktop}
            firstAndLastGutter={!isDesktop}
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={isDesktop ? Math.min(images.length, 3) : 2}
            gutter={10}
            chevronWidth={30}
            outsideChevron={true}
            alwaysShowChevrons={false}
            leftChevron={
                <img
                    className={classes.arrow}
                    src="/arrow-left.png"
                    alt="left arrow"
                />
            }
            rightChevron={
                <img
                    className={classes.arrow}
                    src="/arrow-right.png"
                    alt="right arrow"
                />
            }
        >
            {images.map((image, index) => (
                <div key={index} className={classes.imageContainer}>
                    <img src={image.url} className={classes.image} alt={image.title} />
                </div>
            ))}
        </ItemsCarousel>
    )
}