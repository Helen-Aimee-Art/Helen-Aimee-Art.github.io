import React from 'react'
import { CommissionInfo } from './components/CommissionInfo'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { useState } from 'react'

const images = [
    {
        title: 'Darkshift',
        desc: '',
        url: '/helen-aimee-darkshift-web.jpg',
        keywords: ['all', 'warcraft', 'gaming', 'fantasy']
    },
    {
        title: 'Neefia',
        desc: '',
        url: '/helen-aimee-neefia.jpg',
        keywords: ['all', 'warcraft', 'gaming', 'fantasy']
    },
    {
        title: 'Kait Diaz',
        desc: '',
        url: '/helen-aimee-kait-diaz.jpg',
        keywords: ['all', 'gaming']
    },
    {
        title: 'Juliette',
        desc: '',
        url: '/helen-aimee-juliette.jpg',
        keywords: ['all', 'gaming']
    },
    {
        title: 'Blue and Quincy',
        desc: '',
        url: '/helen-aimee-blue-and-quincy-c.jpg',
        keywords: ['all', 'pets', 'commissions']
    },
    {
        title: 'Sorceress',
        desc: '',
        url: '/helen-aimee-sorceressrgbweb.jpg',
        keywords: ['all', 'fantasy']
    }
]

const arrays = images.map(image => image.keywords)
const keywords = ['all'].concat(...arrays).filter((value, index, array) => array.indexOf(value) === index)

const appStyles = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    position: 'relative'
}

const mainStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    backgroundImage: 'linear-gradient(45deg, #ffffff 25%, #fafafa 25%, #fafafa 50%, #ffffff 50%, #ffffff 75%, #fafafa 75%, #fafafa 100%)',
    backgroundSize: '56.57px 56.57px'
}

export const App = () => {
    const [filter, setFilter] = useState('all')

    const handleFilter = selected => {
        setFilter(selected)
    }

    return (
        <div style={appStyles}>
            <Header />
            <div style={mainStyles}>
                <Gallery
                    keywords={keywords}
                    setFilter={handleFilter}
                    images={images}
                    filter={filter}
                />
                {/* <CommissionInfo /> */}
            </div>
            <Footer />
        </div>
    );
}
