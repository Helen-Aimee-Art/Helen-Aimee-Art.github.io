import React from 'react'
import { Layout } from './Layout'
import { ThemeProvider } from 'react-jss'
import { useEffect, useState } from 'react'

const theme = {
    colorPrimary: '#2D3032',
    colorSecondary: '#F6F6F6',
    colorTertiary: '#CCC0EF',
    colorQuaternary: '#33A1A3'
}

export const App = () => {
    const [currentPage, setCurrentPage] = useState('')
    const [isDesktop, setIsDesktop] = useState(true)
    const [isLargeScreen, setIsLargeScreen] = useState(true)
    const [isMediumScreen, setIsMediumScreen] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 1000)

        setIsLargeScreen(window.innerWidth >= 1920)
        setIsMediumScreen(window.innerWidth < 1920 && window.innerWidth >= 1280)
        setIsSmallScreen(window.innerWidth < 1280)
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
                isLargeScreen={isLargeScreen}
                isMediumScreen={isMediumScreen}
                isSmallScreen={isSmallScreen}
            />
        </ThemeProvider>
    )
}
