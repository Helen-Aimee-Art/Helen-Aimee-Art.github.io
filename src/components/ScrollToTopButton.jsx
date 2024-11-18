import React from 'react'
import { useEffect, useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    scrollButton: ({ showButton }) => ({
        display: showButton ? 'block' : 'none',
        position: 'fixed',
        bottom: 20,
        right: 30,
        zIndex: 99,
        fontSize: 18,
        border: 'none',
        outline: 'none',
        backgroundColor: theme.colorPrimary,
        color: 'white',
        cursor: 'pointer',
        padding: 15,
        borderRadius: '50%',
        '&:hover': {
            color: theme.colorTertiary
        }
    }),
    arrow: {
        width: 25,
        transform: 'rotate(180deg)'
    }
}))

export const ScrollToTopButton = (props) => {
    const theme = useTheme()
    const [showButton, setShowButton] = useState(false)
    const classes = useStyles({ ...props, showButton }, { theme })

    const checkScroll = () => {
        setShowButton(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    }

    const scrollToTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScroll)

        return () => window.removeEventListener('scroll', checkScroll)
    })

    return (
        <div className={classes.scrollButton} title="Scroll to top" onClick={scrollToTop}>
            <img className={classes.arrow} src="/down-arrow.png" alt="Scroll to top arrow" />
        </div>
    )
}