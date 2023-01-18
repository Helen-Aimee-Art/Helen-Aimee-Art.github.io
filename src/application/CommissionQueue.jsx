import React from 'react'
import { useEffect } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        width: '100%'
    },
    frame: {
        width: '100%',
        height: '675px'
    }
}))

export const CommissionQueue = (props) => {
    const { isDesktop, setCurrentPage } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    useEffect(() => {
        setCurrentPage('commissionqueue')
    }, [setCurrentPage])

    return (
        <>
            <div className={classes.container}>
                <iframe
                    className={classes.frame}
                    title="Queue"
                    src="https://trello.com/b/dsJu8SNh.html"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0">
                    Loading…
                </iframe>
            </div>
        </>
        
    )
}
