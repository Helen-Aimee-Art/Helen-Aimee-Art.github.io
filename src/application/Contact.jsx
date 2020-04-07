import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Card } from '../components/Card'
import { Redirect } from 'react-router-dom'

const style = {
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
}

export const Contact = () => {
    const { redirect, setRedirect } = useState(false)

    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm('gmail', 'contact_form', e.target, 'user_RNW5pFEn3BiHTgbZe0dlG')
            .then(result => {
                console.log(result.text)
                setRedirect(true)
            }, error => {
                console.error(error)
            })
    }

    return redirect ?
        <Redirect to="/" /> : (
            <>
                <h1 style={{ marginTop: 0 }}>Contact</h1>
                <Card>
                    <form onSubmit={sendEmail} style={style.form}>
                        <input type="text" name="name" id="name" placeholder="Enter your name" style={style.input} autoComplete="off" required />
                        <input type="text" name="email" id="email" placeholder="Enter your Email address" style={style.input} autoComplete="off" required />
                        <select name="subject" id="subject" style={style.input} required>
                            <option value="none" selected disabled>Choose a subject</option>
                            <option value="question">Question</option>
                            <option value="comment">Comment</option>
                            <option value="commission_request">Commission Request</option>
                            <option value="other">Other</option>
                        </select>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Enter your message"
                            rows="8"
                            maxLength="480"
                            style={{ ...style.input, resize: 'none' }}
                            autoComplete="off"
                            required
                        />
                        <input type="submit" value="Submit" style={style.button} />
                    </form>
                </Card>
            </>
        )
}