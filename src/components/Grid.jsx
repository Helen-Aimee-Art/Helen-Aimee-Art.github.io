import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => ({
    gallery: {
        display: 'grid',
        gridTemplate: (props) => {
            if (props.isLargeScreen) {
                return '1fr / 1fr 1fr 1fr 1fr 1fr'
            } else if (props.isMediumScreen) {
                return '1fr / 1fr 1fr 1fr 1fr 1fr'
            } else {
                return '1fr / 1fr 1fr 1fr'
            }
        },
        gridAutoFlow: 'row',
        gridGap: 10
    }
}))

export const Grid = (props) => {
    const classes = useStyles(props)

    return (
        <div className={classes.gallery}>
            {props.children}
        </div>
    )
}