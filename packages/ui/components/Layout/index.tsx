import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Utils } from './Utils'
import { BlockCover } from '../..'

type Config = {
  useBlockCover?: boolean
}

export const Layout = ({
  children,
  useBlockCover = true,
}: PropsWithChildren<Config>) => (
  <Utils>
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
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
  </Utils>
)
