import { Box, Container } from '@mui/material'
import { FC } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { containerMaxWidth } from 'cnfg'
import { Utils } from './Utils'
import { BlockCover } from '..'

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
            <BlockCover sx={{ flexGrow: 1 }}>{children}</BlockCover>
            <Footer />
        </Box>
    </Utils>
)
