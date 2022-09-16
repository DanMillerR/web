import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'
import { Flex } from '../../../Flex'

export const UserLoadStateLayout = ({
  tKey,
  icon,
}: {
  tKey: string
  icon: ReactNode
}) => {
  const { t } = useTranslation('user-load-state')

  return (
    <Typography variant="h1">
      <Flex aic>
        {icon}
        {t(tKey)}
      </Flex>
    </Typography>
  )
}
