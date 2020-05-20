import React from 'react'
import { Carousel } from './Carousel'
import { createUseStyles, useTheme } from 'react-jss'

const useStyle = createUseStyles(theme => ({
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
}))

export const CommissionCard = (props) => {
    const theme = useTheme()
    const classes = useStyle(theme)
    const { title, details, images } = props

    return (
        <div className={classes.content}>
            <div className={classes.details}>
                {title && <h2 className={classes.title}>{title}</h2>}
                {details}
            </div>
            <div className={classes.carousel}>
                {images.length > 0 && (
                    <Carousel images={images} />
                )}
            </div>
        </div>
    )
}