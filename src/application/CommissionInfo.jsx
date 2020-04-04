import React from 'react'
import { CommissionCard } from '../components/CommissionCard'

const images = [
    {
        url: '/helen-aimee-darkshift-web.jpg'
    },
    {
        url: '/helen-aimee-neefia.jpg'
    },
    {
        url: '/helen-aimee-kait-diaz.jpg'
    },
    {
        url: '/helen-aimee-juliette.jpg'
    },
    {
        url: '/helen-aimee-blue-and-quincy-c.jpg'
    },
    {
        url: '/helen-aimee-sorceressrgbweb.jpg'
    }
]

const style = {
    ul: {
        fontSize: 18,
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        marginLeft: 20
    },
    li: {
        marginBottom: 10
    }
}

export const CommissionInfo = () => {
    return (
        <>
            <h1 style={{ marginTop: 0 }}>Commission Info</h1>
            <CommissionCard
                title="Portrait"
                details={
                    <ul style={style.ul}>
                        <li style={style.li}>Details go here</li>
                        <li style={style.li}>Some more details...</li>
                        <li style={style.li}>Price: £10</li>
                    </ul>
                }
                images={images}
            />
            <CommissionCard
                title="Bust"
                details={
                    <ul style={style.ul}>
                        <li style={style.li}>Details go here</li>
                        <li style={style.li}>Some more details...</li>
                        <li style={style.li}>Price: £10</li>
                    </ul>
                }
                images={images}
            />
            <CommissionCard
                title="Half-body"
                details={
                    <ul style={style.ul}>
                        <li style={style.li}>Details go here</li>
                        <li style={style.li}>Some more details...</li>
                        <li style={style.li}>Price: £10</li>
                    </ul>
                }
                images={images}
            />
        </>
    )
}
