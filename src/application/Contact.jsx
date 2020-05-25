import React from 'react'
import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Dialog } from '../components/Dialog'
import { Form } from '../components/Form'

export const Contact = (props) => {
    const [openDialog, setOpenDialog] = useState(false)

    useEffect(() => {
        props.setCurrentPage('contact')
    }, [])

    return (
        <>
            <Card>
                <Form setOpenDialog={setOpenDialog} />
            </Card>
            <Dialog
                content="Message Sent!"
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                align="flex-end"
            />
        </>
    )
}