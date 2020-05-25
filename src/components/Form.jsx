import React from 'react'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import emailjs from 'emailjs-com'

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

export const Form = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [characterName, setCharacterName] = useState('')
    const [commissionType, setCommissionType] = useState('')
    const theme = useTheme()
    const classes = useStyles(theme)

    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm('gmail', 'contact_form', e.target, 'user_RNW5pFEn3BiHTgbZe0dlG')
            .then(result => {
                console.log(result)
                clearFields()
                props.setOpenDialog(true)
            }, error => {
                console.error(error)
            })
    }

    const clearFields = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setCharacterName('')
        setCommissionType('')
    }

    return (
        <form onSubmit={sendEmail} className={classes.form} >
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
                <option value="question_comment">Question/Comment</option>
                <option value="commission_request">Commission request</option>
            </select>
            {
                subject === 'commission_request' && (
                    <>
                        <input
                            type="text"
                            name="character_name"
                            value={characterName}
                            onChange={e => setCharacterName(e.target.value)}
                            placeholder="Enter your character name"
                            className={classes.input}
                            autoComplete="off"
                            required
                        />
                        <select
                            name="commission_type"
                            value={commissionType}
                            onChange={e => setCommissionType(e.target.value)}
                            className={classes.input}
                            required
                        >
                            <option value="" disabled>Choose a commission type</option>
                            <option value="portrait">Portrait</option>
                            <option value="half_body">Half body</option>
                            <option value="pet">Pet</option>
                        </select>
                    </>
                )
            }
            <textarea
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={subject === 'commission_request' ? 'Please provide details on your character(s) (Eg. physical description, race, age, personality etc.)' : 'Enter your message'}
                rows="8"
                maxLength="480"
                className={classes.input}
                style={{ resize: 'none' }}
                autoComplete="off"
                required
            />
            <input type="submit" value="Submit" className={classes.button} />
        </form >
    )
}