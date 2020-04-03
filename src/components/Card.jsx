import React from 'react'

const style = (props) => {
    return {
        card: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#282c34',
            color: '#f2f2f2',
            borderRadius: 5,
            padding: 20,
            width: props.width
        },
        title: {
            margin: 0,
            marginBottom: 10
        },
        content: {

        }
    }
}

export const Card = (props) => {
    const styles = style(props)
    const { title, content } = props

    return (
        <div style={styles.card}>
            {title && (
                <h2 style={styles.title}>{title}</h2>
            )}
            {content && (
                <div style={styles.content}>
                    {content}
                </div>
            )}
        </div>
    )
}