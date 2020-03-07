import React from 'react'
import { useState } from 'react'
import { GalleryItem } from './GalleryItem'
import { Modal } from './Modal'

const images = [
    {
        title: 'Darkshift',
        desc: '',
        url: '/helen-aimee-darkshift-web.jpg',
        keywords: ['warcraft', 'gaming', 'fantasy']
    },
    {
        title: 'Neefia',
        desc: '',
        url: '/helen-aimee-neefia.jpg',
        keywords: ['warcraft', 'gaming', 'fantasy']
    },
    {
        title: 'Kait Diaz',
        desc: '',
        url: '/helen-aimee-kait-diaz.jpg',
        keywords: ['gaming']
    },
    {
        title: 'Juliette',
        desc: '',
        url: '/helen-aimee-juliette.jpg',
        keywords: ['gaming']
    },
    {
        title: 'Blue and Quincy',
        desc: '',
        url: '/helen-aimee-blue-and-quincy-c.jpg',
        keywords: ['pets', 'commissions']
    },
    {
        title: 'Sorceress',
        desc: '',
        url: '/helen-aimee-sorceressrgbweb.jpg',
        keywords: ['fantasy']
    }
]

const galleryStyles = {
    display: 'grid',
    gridTemplate: '1fr / 1fr 1fr 1fr 1fr',
    gridAutoFlow: 'row',
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    gridGap: 20,
    width: '50%'
}

export const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(-1)
    const [open, setOpen] = useState(false)

    const openModal = (id) => {
        setCurrentImage(id)
        setOpen(true)
    }

    const closeModal = () => {
        setCurrentImage(-1)
        setOpen(false)
    }

    return (
        <div style={galleryStyles}>
            {images.map(image => (
                <GalleryItem
                    key={images.indexOf(image)}
                    id={images.indexOf(image)}
                    title={image.title}
                    desc={image.desc}
                    url={image.url}
                    keywords={image.keywords}
                    openModal={openModal}
                />
            ))}
            <Modal
                open={open}
                currentImageId={currentImage}
                currentImage={images[currentImage]}
                numImages={images.length - 1}
                closeModal={closeModal}
                incrementModalImage={() => setCurrentImage(prevImage => Math.min(prevImage + 1, images.length - 1))}
                decrementModalImage={() => setCurrentImage(prevImage => Math.max(prevImage - 1, 0))}
            />
        </div>
    )
}
