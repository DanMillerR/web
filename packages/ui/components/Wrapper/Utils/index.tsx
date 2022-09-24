import { CssBaseline, useTheme } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Props, Providers } from './Providers'
import { UserLoadState } from './UserLoadState'
import NextNProgress from 'nextjs-progressbar'

export const Utils = ({ children, localConfig }: PropsWithChildren<Props>) => (
  <Providers {...{ localConfig }}>
    <CssBaseline enableColorScheme />
    <NextNProgress
      color={useTheme().palette.secondary.main}
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
    <UserLoadState>{children}</UserLoadState>
  </Providers>
)
