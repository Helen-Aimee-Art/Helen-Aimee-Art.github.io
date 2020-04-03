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
        content: {

        }
    }
}

export const Card = (props) => {
    const styles = style(props)
    const { content } = props

    return (
        <div style={styles.card}>
            {content && (
                <div style={styles.content}>
                    {content}
                </div>
            )}
        </div>
    )
}