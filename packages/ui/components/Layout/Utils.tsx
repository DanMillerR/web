import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'
import { useUserLoad } from 'acc'

export const Utils = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  // useUserLoad()

  return (
    <ThemeProvider theme={createTheme({})}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  )
}
