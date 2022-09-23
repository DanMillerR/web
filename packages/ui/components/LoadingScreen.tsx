import { Typography } from '@mui/material'
import { USER_LOAD_STATE } from 'cnfg/namespaces'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'
import { Flex } from './Flex'
import { Header } from './Header'

type PropsBase = {
  tKey?: string
  icon?: ReactNode
}

const LoadingScreenBase = ({
  tKey,
  icon,
  height,
}: PropsBase & {
  height?: true
}) => {
  const { t } = useTranslation(USER_LOAD_STATE)

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
  header,
  ...props
}: PropsBase & {
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
      <LoadingScreenBase {...props} />
    </Flex>
  ) : (
    <LoadingScreenBase {...props} height />
  )
