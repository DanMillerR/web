import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'
import { useAccounts } from 'acc'

export const Utils = ({
    children,
}: PropsWithChildren<Record<never, never>>) => {
    useAccounts()

    return (
        <ThemeProvider theme={createTheme({})}>
            <CssBaseline enableColorScheme />
            {children}
        </ThemeProvider>
    )
}
