import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'

export const Utils = ({
    children,
}: PropsWithChildren<Record<never, never>>) => (
    <ThemeProvider theme={createTheme({})}>
        <CssBaseline enableColorScheme />
        {children}
    </ThemeProvider>
)
