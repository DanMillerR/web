import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'
import { Flex } from './Flex'
import { Header } from './Header'

const LoadingScreenBase = ({
  ns,
  tKey,
  icon,
  height,
}: {
  ns?: string
  tKey?: string
  icon?: ReactNode
  height?: true
}) => {
  const { t } = useTranslation(ns)

  return (
    <Flex
      aic
      sx={{
        ...(height && { height: '100vh' }),
        flexGrow: 1,
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1">
        <Flex aic>
          {icon}
          {tKey && t(tKey)}
        </Flex>
      </Typography>
    </Flex>
  )
}

export const LoadingScreen = ({
  ns,
  tKey,
  icon,
  header,
}: {
  ns?: string
  tKey?: string
  icon?: ReactNode
  header?: true
}) =>
  header ? (
    <Flex
      sx={{
        height: '100vh',
      }}
      clmn
    >
      <Header />
      <LoadingScreenBase />
    </Flex>
  ) : (
    <LoadingScreenBase height />
  )
