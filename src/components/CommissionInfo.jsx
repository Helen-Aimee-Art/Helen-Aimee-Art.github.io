import React from 'react'
import { CommissionCard } from './CommissionCard'

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
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    }
}

export const CommissionInfo = () => {
    return (
        <div style={style.container}>
            <h1>Commission Info</h1>
            <CommissionCard
                title="Portrait"
                leftContent={
                    <ul style={style.ul}>
                        <li>Details go here</li>
                        <li>Some more details...</li>
                        <li>Price: £10</li>
                    </ul>
                }
                images={images}
            />
            <CommissionCard
                title="Bust"
                leftContent={
                    <ul style={style.ul}>
                        <li>Details go here</li>
                        <li>Some more details...</li>
                        <li>Price: £10</li>
                    </ul>
                }
                images={images}
            />
            <CommissionCard
                title="Half-body"
                leftContent={
                    <ul style={style.ul}>
                        <li>Details go here</li>
                        <li>Some more details...</li>
                        <li>Price: £10</li>
                    </ul>
                }
                images={images}
            />
        </div>
    )
}
