import React from 'react'
import { CommissionCard } from '../components/CommissionCard'
import { Drawer } from '../components/Drawer'

const images = [
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
        url: '/helen-aimee-serana.jpg',
        type: 'bust'
    },
    {
        url: '/helen-aimee-flameleaf.jpg',
        type: 'bust'
    },
    {
        url: '/helen-aimee-neefia.jpg',
        type: 'bust'
    },
    {
        url: '/helen-aimee-ribbon.jpg',
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
        fontSize: 18
    },
    li: {
        marginBottom: 10
    }
}

export const CommissionInfo = () => {
    return (
        <>
            <h1 style={{ marginTop: 0 }}>Commission Info</h1>
            <Drawer title="Portrait / Bust" defaultOpen>
                <CommissionCard
                    details={
                        <ul style={style.ul}>
                            <li style={style.li}>Details go here</li>
                            <li style={style.li}>Some more details go here...</li>
                            <li style={style.li}>Price: $75-$100</li>
                        </ul>
                    }
                    images={images.filter(image => image.type === 'bust')}
                />
            </Drawer>
            <Drawer title="Half-body" defaultOpen>
                <CommissionCard
                    details={
                        <ul style={style.ul}>
                            <li style={style.li}>Details go here</li>
                            <li style={style.li}>Some more details go here...</li>
                            <li style={style.li}>Price: $150</li>
                        </ul>
                    }
                    images={images.filter(image => image.type === 'halfbody')}
                />
            </Drawer>
            <Drawer title="Pet" defaultOpen>
                <CommissionCard
                    details={
                        <ul style={style.ul}>
                            <li style={style.li}>Details go here</li>
                            <li style={style.li}>Some more details go here...</li>
                            <li style={style.li}>Price: Depends on complexity</li>
                        </ul>
                    }
                    images={images.filter(image => image.type === 'pet')}
                />
            </Drawer>
        </>
    )
}
