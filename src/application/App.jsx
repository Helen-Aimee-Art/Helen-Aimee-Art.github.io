import React from 'react'
import { Layout } from './Layout'
import { ThemeProvider } from 'react-jss'
import { useEffect, useState } from 'react'

const theme = {
    colorPrimary: '#1F2833',
    colorSecondary: '#f2f2f2',
    colorTertiary: '#D21F3C'
}

export const App = () => {
    const [currentPage, setCurrentPage] = useState('')
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800)

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 800)
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia)

        return () => window.removeEventListener('resize', updateMedia)
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
