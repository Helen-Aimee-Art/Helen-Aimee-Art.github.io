import React from 'react'
import ItemsCarousel from 'react-items-carousel'
import { Card } from './Card'
import { useState } from 'react'

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30,
        width: '100%'
    },
    content: {
        display: 'flex',
        width: '100%'
    },
    left: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    right: {
        display: 'flex',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding : '0 60px',
        maxWidth: 800,
        margin: '0 auto'
    },
    image: {
        height: 200,
        width: 200,
        backgroundColor: 'red'
    }
}

export const CommissionCard = (props) => {
    const { title, leftContent, images } = props
    const [activeItemIndex, setActiveItemIndex] = useState(0)

    const content = (
        <div style={style.content}>
            <div style={style.left}>
                {leftContent}
            </div>
            <div style={style.right}>
                <ItemsCarousel
                    infiniteLoop={false}
                    activePosition={'center'}
                    disableSwipe={true}
                    alwaysShowChevrons={false}
                    slidesToScroll={1}
                    showSlither={false}
                    firstAndLastGutter={false}
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={12}
                    leftChevron={'<'}
                    rightChevron={'>'}
                    chevronWidth={40}
                >
                    {images.map((image, index) => (
                        <div 
                            key={index}
                            style={style.image}
                        />
                    ))}
                </ItemsCarousel>
            </div>
        </div>
    )

    return (
        <div style={style.container}>
            <Card title={title} content={content} width="50%" />
        </div>
    )
}