import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'
import { Flex } from './Flex'
import { Header } from './Header'

export const LoadingScreen = ({
  ns,
  tKey,
  icon,
}: {
  ns?: string
  tKey?: string
  icon?: ReactNode
}) => {
  const { t } = useTranslation(ns)

  return (
    <Flex
      sx={{
        height: '100vh',
      }}
      clmn
    >
      <Header />
      <Flex aic sx={{ flexGrow: 1, justifyContent: 'center' }}>
        <Typography variant="h1">
          <Flex aic>
            {icon}
            {tKey && t(tKey)}
          </Flex>
        </Typography>
      </Flex>
    </Flex>
  )
}
