import { AppBar, Toolbar, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { PropsWithChildren } from 'react'
import { BlockCover } from '../BlockCover'
import { Flex } from '../Flex'

export const Header = ({ children }: PropsWithChildren<EmptyObj>) => {
  const { t } = useTranslation('ui', { keyPrefix: 'header' })

  return (
    <AppBar position="sticky">
      <BlockCover>
        <Toolbar>
          <Flex aic sx={{ p: 1 }}>
            <Typography sx={{ mr: 'auto' }}>{t('title')}</Typography>
            {children}
          </Flex>
        </Toolbar>
      </BlockCover>
    </AppBar>
  )
}
