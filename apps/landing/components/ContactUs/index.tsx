import { useTheme, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { InSocials } from './InSocials'
import { ViaEmail } from './ViaEmail'
import { BlockCover } from 'ui'

export const ContactUs = () => {
  const { t } = useTranslation('landing', { keyPrefix: 'contactUs' })
  const { palette } = useTheme()

  return (
    <BlockCover sx={{ p: 1, backgroundColor: palette.grey[200] }}>
      <Typography textAlign="center" variant="h4">
        {t('title')}
      </Typography>
      <InSocials />
      <ViaEmail />
    </BlockCover>
  )
}
