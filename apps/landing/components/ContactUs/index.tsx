import { useTheme, Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { InSocials } from './InSocials'
import { ViaEmail } from './ViaEmail'

export const ContactUs = () => {
    const { t } = useTranslation('landing', { keyPrefix: 'contactUs' })
    const { palette } = useTheme()

    return (
        <Box sx={{ p: 1, backgroundColor: palette.grey[200] }}>
            <Typography textAlign="center" variant="h4">
                {t('title')}
            </Typography>
            <InSocials />
            <ViaEmail />
        </Box>
    )
}
