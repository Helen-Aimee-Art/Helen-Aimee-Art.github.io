import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    gallery: {
        display: 'grid',
        gridTemplate: '1fr / 1fr 1fr 1fr 1fr 1fr',
        gridAutoFlow: 'row',
        gridGap: 10
    }
}))

export const GalleryGrid = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <div className={classes.gallery}>
            {props.children}
        </div>
    )
}