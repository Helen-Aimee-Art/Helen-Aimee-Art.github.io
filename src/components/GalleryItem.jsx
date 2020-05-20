import React from 'react'
import { Overlay } from './Overlay'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        position: 'relative',
        width: 218,
        height: 300,
        cursor: 'pointer'
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}))

export const GalleryItem = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [open, setOpen] = useState(false)

    const handleHover = () => setOpen(!open)

    return (
        <div className={classes.container} onMouseEnter={handleHover} onMouseLeave={handleHover} onMouseDown={() => props.openModal(props.id)}>
            <img src={props.url} alt={props.desc} className={classes.img} />
            <Overlay title={props.title} open={open} />
        </div>
    )
}
