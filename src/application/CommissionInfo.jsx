import React from 'react'
import { CommissionCard } from '../components/CommissionCard'

const images = [
    {
        url: '/new-images-coming-soon.jpg',
        type: 'portrait'
    },
    {
        url: '/new-images-coming-soon.jpg',
        type: 'portrait'
    },
    {
        url: '/new-images-coming-soon.jpg',
        type: 'portrait'
    },
    {
        url: '/helen-aimee-darkshift-web.jpg',
        type: 'halfbody'
    },
    {
        url: '/new-images-coming-soon.jpg',
        type: 'halfbody'
    },
    {
        url: '/new-images-coming-soon.jpg',
        type: 'halfbody'
    },
    {
        url: '/helen-aimee-neefia.jpg',
        type: 'bust'
    },
    {
        url: '/helen-aimee-kait-diaz.jpg',
        type: 'bust'
    },
    {
        url: '/new-images-coming-soon.jpg',
        type: 'bust'
    },
    {
        url: '/helen-aimee-blue-and-quincy-c.jpg',
        type: 'pet'
    },
    {
        url: '/new-images-coming-soon.jpg',
        type: 'pet'
    },
    {
        url: '/new-images-coming-soon.jpg',
        type: 'pet'
    },
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
                images={images.filter(image => image.type === 'portrait')}
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
                images={images.filter(image => image.type === 'bust')}
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
                images={images.filter(image => image.type === 'halfbody')}
            />
            <CommissionCard
                title="Pet"
                details={
                    <ul style={style.ul}>
                        <li style={style.li}>Details go here</li>
                        <li style={style.li}>Some more details...</li>
                        <li style={style.li}>Price: £10</li>
                    </ul>
                }
                images={images.filter(image => image.type === 'pet')}
            />
        </>
    )
}
