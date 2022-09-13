import { CssBaseline } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Props, Providers } from './Providers'
import { UserLoadState } from './UserLoadState'

export const Utils = ({ children, localConfig }: PropsWithChildren<Props>) => (
  <Providers {...{ localConfig }}>
    <CssBaseline enableColorScheme />
    <UserLoadState {...{ children }} />
  </Providers>
)
