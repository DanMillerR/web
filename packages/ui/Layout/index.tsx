import { Box, Container } from '@mui/material'
import { FC } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { containerMaxWidth } from 'cnfg'
import { Utils } from './Utils'

export const Layout: FC = ({ children }) => (
    <Utils>
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Header />
            <Box sx={{ flexGrow: 1 }}>
                <Container maxWidth={containerMaxWidth}>{children}</Container>
            </Box>
            <Footer />
        </Box>
    </Utils>
)
