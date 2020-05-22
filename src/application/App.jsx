import React from 'react'
import { Layout } from './Layout'
import { ThemeProvider } from 'react-jss'
import { useState } from 'react'

const theme = {
    colorPrimary: '#1F2833',
    colorSecondary: '#f2f2f2'
}

export const App = () => {
    const [currentPage, setCurrentPage] = useState('')

    return (
        <ThemeProvider theme={theme}>
            <Layout currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </ThemeProvider>
    )
}
