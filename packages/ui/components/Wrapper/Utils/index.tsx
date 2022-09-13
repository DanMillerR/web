import { CssBaseline } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Props, Providers } from './Providers'
import { UserLoad } from './UserLoad'

export const Utils = ({ children, localConfig }: PropsWithChildren<Props>) => (
  <Providers {...{ localConfig }}>
    <CssBaseline enableColorScheme />
    <UserLoad {...{ children }} />
  </Providers>
)
