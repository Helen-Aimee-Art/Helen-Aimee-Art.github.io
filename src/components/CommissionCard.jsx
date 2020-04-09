import React from 'react'
import { Carousel } from './Carousel'

const style = {
    title: {
        alignSelf: 'center'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    details: {
        maxWidth: 485
    },
    carousel: {
        padding: '0 25px',
        maxWidth: 650
    }
}

export const CommissionCard = (props) => {
    const { title, details, images } = props

    return (
        <div style={style.content}>
            <div style={style.details}>
                {title && <h2 style={style.title}>{title}</h2>}
                {details}
            </div>
            <div style={style.carousel}>
                {images.length > 0 && (
                    <Carousel images={images} />
                )}
            </div>
        </div>
    )
}