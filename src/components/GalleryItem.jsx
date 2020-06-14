import React from 'react'
import { Overlay } from './Overlay'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: isDesktop => ({
        position: 'relative',
        width: isDesktop ? 218 : 109,
        height: isDesktop ? 300 : 150,
        cursor: 'pointer'
    }),
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}))

export const GalleryItem = (props) => {
    const isDesktop = props.isDesktop
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })
    const [open, setOpen] = useState(false)

    const handleHover = () => setOpen(!open)

    return (
        <div className={classes.container} onMouseEnter={handleHover} onMouseLeave={handleHover} onMouseDown={() => props.openModal(props.id)}>
            <img src={props.url} alt={props.desc} className={classes.img} />
            <Overlay title={props.title} open={open} />
        </div>
    )
}
