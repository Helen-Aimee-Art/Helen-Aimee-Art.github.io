import React from 'react'
import { Carousel } from './Carousel'
import { createUseStyles, useTheme } from 'react-jss'

const useStyle = createUseStyles(theme => ({
    title: {
        alignSelf: 'center'
    },
    content: isDesktop => ({
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: isDesktop ? 'row' : 'column'
    }),
    details: {
        maxWidth: 485,
        alignSelf: 'flex-start'
    },
    carousel: {
        padding: '0 25px',
        maxWidth: 650
    }
}))

export const CommissionCard = (props) => {
    const { title, details, images, isDesktop } = props
    const theme = useTheme()
    const classes = useStyle(isDesktop, { theme })

    return (
        <div className={classes.content}>
            <div className={classes.details}>
                {title && <h2 className={classes.title}>{title}</h2>}
                {details}
            </div>
            <div className={classes.carousel}>
                {images.length > 0 && (
                    <Carousel images={images} isDesktop={props.isDesktop} />
                )}
            </div>
        </div>
    )
}