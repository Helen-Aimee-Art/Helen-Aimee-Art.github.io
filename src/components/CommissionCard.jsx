import React from 'react'
import { Card } from './Card'
import { Carousel } from './Carousel'

const style = {
    container: {
        marginBottom: 20
    },
    title: {
        alignSelf: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
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
    }
}

export const CommissionCard = (props) => {
    const { title, details, images } = props

    return (
        <div style={style.container}>
            <Card>
                <div style={style.content}>
                    <div style={style.details}>
                        <h2 style={style.title}>{title}</h2>
                        {details}
                    </div>
                    <div style={style.carousel}>
                        {images.length > 0 && (
                            <Carousel images={images} />
                        )}
                    </div>
                </div>
            </Card>
        </div>
    )
}