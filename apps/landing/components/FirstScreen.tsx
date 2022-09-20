import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { BlockCover } from 'ui'
import { LANDING } from 'cnfg/namespaces'

export const FirstScreen = () => {
  const { t } = useTranslation(LANDING)

  return (
    <BlockCover
      sx={{
        p: 1,
        backgroundSize: 'cover',
        backgroundImage: "url('/pictures/paris.jpg')",
      }}
    >
      <Typography color="#fff" variant="h1">
        {t('main-title')}
      </Typography>
    </BlockCover>
  )
}
