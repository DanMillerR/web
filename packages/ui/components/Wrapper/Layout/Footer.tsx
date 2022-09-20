import { useTranslation } from 'next-i18next'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { BlockCover } from '../../BlockCover'
import { UI } from 'cnfg/namespaces'
import { UI_FOOTER } from 'cnfg/keyPreffixes'

export const Footer = () => {
  const { t } = useTranslation(UI, { keyPrefix: UI_FOOTER })

  return (
    <AppBar position="relative">
      <BlockCover>
        <Toolbar>
          <Typography textAlign="center">{t('text')}</Typography>
        </Toolbar>
      </BlockCover>
    </AppBar>
  )
}
