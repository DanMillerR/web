import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'
import { BlockCover } from '../../BlockCover'
import { Footer } from './Footer'
import { Header } from './Header'

export type Config = {
  useBlockCover?: boolean
}

export const Layout = ({
  children,
  useBlockCover,
}: PropsWithChildren<Config>) => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      whiteSpace: 'pre-wrap',
    }}
  >
    <Header />
    {useBlockCover ? (
      <BlockCover sx={{ flexGrow: 1 }}>{children}</BlockCover>
    ) : (
      children
    )}
    <Footer />
  </Box>
)
