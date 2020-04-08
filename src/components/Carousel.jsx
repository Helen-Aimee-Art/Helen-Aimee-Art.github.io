import React from 'react'
import { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'

const style = {
    arrow: {
        width: 50,
        userSelect: 'none',
        opacity: 0.25,
        transition: 'opacity 0.2s'
    },
    imageContainer: {
        width: 200,
        height: 290
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}

export const Carousel = (props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const { images } = props
    const [leftOpacity, setLeftOpacity] = useState(0.25)
    const [rightOpacity, setRightOpacity] = useState(0.25)

    const toggleLeftOpacity = () => {
        setLeftOpacity(prevOpacity => prevOpacity === 0.25 ? 1 : 0.25)
    }

    const toggleRightOpacity = () => {
        setRightOpacity(prevOpacity => prevOpacity === 0.25 ? 1 : 0.25)
    }

    return (
        <ItemsCarousel
            infiniteLoop={true}
            activePosition={'center'}
            disableSwipe={false}
            slidesToScroll={1}
            showSlither={false}
            firstAndLastGutter={false}
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={Math.min(images.length, 3)}
            gutter={10}
            chevronWidth={30}
            outsideChevron={true}
            alwaysShowChevrons={false}
            leftChevron={
                <img
                    style={{ ...style.arrow, opacity: leftOpacity }}
                    src="/arrow-left.png"
                    alt="left arrow"
                    onMouseEnter={toggleLeftOpacity}
                    onMouseLeave={toggleLeftOpacity}
                />
            }
            rightChevron={
                <img
                    style={{ ...style.arrow, opacity: rightOpacity }}
                    src="/arrow-right.png"
                    alt="right arrow"
                    onMouseEnter={toggleRightOpacity}
                    onMouseLeave={toggleRightOpacity}
                />
            }
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    style={style.imageContainer}
                >
                    <img src={image.url} style={style.image} alt={image.title}/>
                </div>
            ))}
        </ItemsCarousel>
    )
}