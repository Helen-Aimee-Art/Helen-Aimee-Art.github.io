import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Card } from '../components/Card'
import { Dialog } from '../components/Dialog'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: 500
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    },
    button: {
        width: 75,
        padding: 10,
        alignSelf: 'flex-end'
    }
}))

export const Contact = () => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [openDialog, setOpenDialog] = useState(false)

    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm('gmail', 'contact_form', e.target, 'user_RNW5pFEn3BiHTgbZe0dlG')
            .then(result => {
                console.log(result)
                clearFields()
                setOpenDialog(true)
            }, error => {
                console.error(error)
            })
    }

    const clearFields = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    return (
        <>
            <Card>
                <form onSubmit={sendEmail} className={classes.form}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter your name"
                        className={classes.input}
                        autoComplete="off"
                        required
                    />
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your Email address"
                        className={classes.input}
                        autoComplete="off"
                        required
                    />
                    <select
                        name="subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        className={classes.input}
                        required
                    >
                        <option value="" disabled>Choose a subject</option>
                        <option value="question">Question</option>
                        <option value="comment">Comment</option>
                        <option value="commission_request">Commission Request</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Enter your message"
                        rows="8"
                        maxLength="480"
                        className={classes.input}
                        style={{resize: 'none'}}
                        autoComplete="off"
                        required
                    />
                    <input type="submit" value="Submit" className={classes.button} />
                </form>
            </Card>
            <Dialog
                content="Message Sent!"
                open={openDialog}
                onClose={() => setOpenDialog(false)}
            />
            <hr/>
        </>
    )
}