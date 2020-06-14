import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    gallery: {
        display: 'grid',
        gridTemplate: isDesktop => isDesktop ? '1fr / 1fr 1fr 1fr 1fr 1fr' : '1fr / 1fr 1fr 1fr',
        gridAutoFlow: 'row',
        gridGap: 10
    }
}))

export const Grid = (props) => {
    const isDesktop = props.isDesktop
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    return (
        <div className={classes.gallery}>
            {props.children}
        </div>
    )
}