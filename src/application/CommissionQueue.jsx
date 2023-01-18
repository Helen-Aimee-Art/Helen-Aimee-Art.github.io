import React, { useEffect } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        width: '100%'
    },
    frame: {
        width: '100%',
        height: '710px'
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
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0">
                    Loading…
                </iframe>
            </div>
        </>

    )
}
