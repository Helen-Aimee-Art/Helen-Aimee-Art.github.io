import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    modalContainer: ({ open }) => ({
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: open ? 'block' : 'none',
        zIndex: 10000000
    }),
    modal: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center'
    }
}))

export const Modal = (props) => {
    const { closeModal, open, children } = props
    const theme = useTheme()
    const classes = useStyles({ open, theme })

    const handleClick = (e) => {
        if (e.target.id === 'modal') {
            closeModal()
        }
    }

    return (
        <div
            id="modal-container"
            className={classes.modalContainer}
            onClick={(e) => handleClick(e)}
        >
            <div id="modal" className={classes.modal}>
                {children}
            </div>
        </div>
    )
}
