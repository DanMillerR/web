import { createTheme, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { PropsWithChildren } from 'react'
import { LocalConfig, LocalConfigValue } from 'ctx'

export type Props = {
  localConfig?: LocalConfigValue
}

export const Providers = ({
  children,
  localConfig,
}: PropsWithChildren<Props>) => (
  <LocalConfig value={localConfig}>
    <ThemeProvider theme={createTheme()}>
      <SnackbarProvider>{children}</SnackbarProvider>
    </ThemeProvider>
  </LocalConfig>
)
