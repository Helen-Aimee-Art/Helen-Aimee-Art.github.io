import React from 'react'
import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Dialog } from '../components/Dialog'
import { Form } from '../components/Form'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'flex',
        width: isDesktop => isDesktop ? 500 : '100%'
    }
}))

export const Contact = (props) => {
    const isDesktop = props.isDesktop
    const [openDialog, setOpenDialog] = useState(false)
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    useEffect(() => {
        props.setCurrentPage('contact')
    }, [])

    return (
        <div className={classes.container}>
            <Card>
                <Form setOpenDialog={setOpenDialog} isDesktop={props.isDesktop} />
            </Card>
            <Dialog
                content="Message Sent!"
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                align="flex-end"
            />
        </div>
    )
}