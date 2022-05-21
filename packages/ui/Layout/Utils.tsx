import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { FC } from 'react'

export const Utils: FC = ({ children }) => (
    <ThemeProvider
        theme={createTheme({
            palette: { mode: 'dark' },
        })}
    >
        <CssBaseline enableColorScheme />
        {children}
    </ThemeProvider>
)
