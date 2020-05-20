import React from 'react'
import { Layout } from './Layout'
import { ThemeProvider } from 'react-jss'

const theme = {
    colorPrimary: '#1F2833',
    colorSecondary: '#f2f2f2'
}

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    )
}
