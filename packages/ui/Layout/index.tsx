import { Box, Container, CssBaseline } from '@mui/material'
import { FC } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { containerMaxWidth } from 'cnfg'

export const Layout: FC = ({ children }) => (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <CssBaseline />
        <Header />
        <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth={containerMaxWidth}>{children}</Container>
        </Box>
        <Footer />
    </Box>
)
