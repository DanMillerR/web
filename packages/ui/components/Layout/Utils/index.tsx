import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'
import { UserLoad } from './UserLoad'

export const Utils = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  return (
    <ThemeProvider theme={createTheme({})}>
      <CssBaseline enableColorScheme />
      <UserLoad {...{ children }} />
    </ThemeProvider>
  )
}
