import React from 'react'
import { Overlay } from './Overlay'
import { useState } from 'react'

const style = {
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
}

export const GalleryItem = (props) => {
    const [open, setOpen] = useState(false)

    const handleHover = () => setOpen(!open)

    return (
        <div style={style.container} onMouseEnter={handleHover} onMouseLeave={handleHover} onMouseDown={() => props.openModal(props.id)}>
            <img src={props.url} alt={props.desc} style={style.img} />
            <Overlay title={props.title} open={open} />
        </div>
    )
}
