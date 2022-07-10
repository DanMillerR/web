import { Box, Typography } from '@mui/material'
import { emails } from 'cnfg'
import { useTranslation } from 'next-i18next'

const EmailPresent = ({
  category,
  email,
}: {
  category: string
  email: string
}) => (
  <Box sx={{ m: 'auto', display: 'flex', flexDirection: 'column' }}>
    <Typography textAlign="center" variant="subtitle1">
      {category}
    </Typography>
    <Typography textAlign="center" variant="h6">
      {email}
    </Typography>
  </Box>
)

export const ViaEmail = () => {
  const { t } = useTranslation('landing', { keyPrefix: 'contactUs.viaEmail' })

  return (
    <>
      <Typography textAlign="center" variant="h5">
        {t('title')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {Object.entries(emails).map(([category, email]) => (
          <EmailPresent key={category} category={t(category)} email={email} />
        ))}
      </Box>
    </>
  )
}
