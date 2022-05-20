import { Box, Container } from '@mui/material'
import { containerMaxWidth } from 'cnfg'
import { useTranslation } from 'next-i18next'

export const Footer = () => {
    const { t } = useTranslation('ui', { keyPrefix: 'footer' })

    return (
        <Box>
            <Container maxWidth={containerMaxWidth}>{t('text')}</Container>
        </Box>
    )
}
