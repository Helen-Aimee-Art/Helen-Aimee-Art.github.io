import React from 'react'
import { Layout } from './Layout'
import { ThemeProvider } from 'react-jss'
import { useEffect, useState } from 'react'

const theme = {
    colorPrimary: '#2D3032',
    colorSecondary: '#F6F6F6',
    colorTertiary: '#CCC0EF',
    colorQuaternary: '#33A1A3',
    breakpoints: {}
}

export const App = () => {
    const [currentPage, setCurrentPage] = useState('')
    const [isDesktop, setIsDesktop] = useState(true)

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 1000)
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia)
        updateMedia()

        return () => window.removeEventListener('resize', updateMedia)
    })

    useEffect(() => {
        const s = document.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.innerHTML = `
            kofiWidgetOverlay.draw(
                'helenaimeeart',
                {
                'type': 'floating-chat',
                'floating-chat.donateButton.text': 'Support me',
                'floating-chat.donateButton.background-color': '#CCC0EF',
                'floating-chat.donateButton.text-color': '#000'
                }
            );
        `
        document.body.appendChild(s)
    })

    return (
        <ThemeProvider theme={theme}>
            <Layout
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isDesktop={isDesktop}
            />
        </ThemeProvider>
    )
}
