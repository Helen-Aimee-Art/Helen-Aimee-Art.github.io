import React from 'react'
import { useEffect } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        width: '100%'
    },
    form: {
        width: '100%',
        height: '1300px'
    }
}))

export const CommissionForm = (props) => {
    const { isDesktop, setCurrentPage } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    useEffect(() => {
        setCurrentPage('commissionform')
    }, [setCurrentPage])

    return (
        <>
            <div className={classes.container}>
                <iframe
                    className={classes.form}
                    title="Commission Form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeEC5AAjix4OOfgcXzL_zvijeN9YE1fFq58UaJrWlHYwQdxpA/viewform?embedded=true"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0">
                    Loading…
                </iframe>
            </div>
        </>
    )
}
