import React from 'react'
import ItemsCarousel from 'react-items-carousel'
import { Card } from './Card'
import { useState } from 'react'

const style = {
    container: {
        marginBottom: 20
    },
    title: {
        alignSelf: 'center'
    },
    content: {
        display: 'flex',
        width: '100%'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        maxWidth: 250
    },
    carousel: {
        padding: '0 30px',
        maxWidth: 650,
        margin: '0 auto'
    },
    imageContainer: {
        width: 200,
        height: 290
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    arrow: {
        width: 50,
        userSelect: 'none',
        opacity: 0.25,
        transition: 'opacity 0.2s'
    }
}

export const CommissionCard = (props) => {
    const { title, details, images } = props
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const [leftOpacity, setLeftOpacity] = useState(0.25)
    const [rightOpacity, setRightOpacity] = useState(0.25)

    const toggleLeftOpacity = () => {
        setLeftOpacity(prevOpacity => prevOpacity === 0.25 ? 1 : 0.25)
    }

    const toggleRightOpacity = () => {
        setRightOpacity(prevOpacity => prevOpacity === 0.25 ? 1 : 0.25)
    }

    const carousel = images.length > 0 && (
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
                    <img src={image.url} style={style.image} />
                </div>
            ))}
        </ItemsCarousel>
    )


    return (
        <div style={style.container}>
            <Card>
                <div style={style.content}>
                    <div style={style.details}>
                        <h2 style={style.title}>{title}</h2>
                        {details}
                    </div>
                    <div style={style.carousel}>
                        {carousel}
                    </div>
                </div>
            </Card>
        </div>
    )
}