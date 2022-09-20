import { AppBar, Toolbar, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { PropsWithChildren } from 'react'
import { BlockCover } from './BlockCover'
import { Flex } from './Flex'
import Link from 'next/link'
import { UI } from 'cnfg/namespaces'
import { UI_HEADER } from 'cnfg/keyPreffixes'

export const Header = ({ children }: PropsWithChildren<EmptyObj>) => {
  const { t } = useTranslation(UI, { keyPrefix: UI_HEADER })

  return (
    <AppBar position="sticky">
      <BlockCover>
        <Toolbar>
          <Flex aic sx={{ width: '100%' }}>
            <Link href="/">
              <Typography variant="h5" sx={{ mr: 'auto' }}>
                {t('title')}
              </Typography>
            </Link>
            {children}
          </Flex>
        </Toolbar>
      </BlockCover>
    </AppBar>
  )
}
