import React from 'react'
import { Overlay } from './Overlay'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer',
        border: '2px solid rgba(0,0,0,0)',
        transition: 'border-color 0.25s',
        '&:hover': {
            borderColor: theme.colorTertiary
        }
    },
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

    const handleMouseEnter = () => setOpen(true)
    const handleMouseLeave = () => setOpen(false)

    return (
        <div className={classes.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={() => props.openModal(props.id)}>
            <img src={props.url} alt={props.desc} className={classes.img} />
            <Overlay title={props.title} open={open} />
        </div>
    )
}
