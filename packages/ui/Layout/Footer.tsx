import { Box, Container } from '@mui/material'
import { containerMaxWidth, styles } from 'cnfg'
import { useTranslation } from 'next-i18next'

export const Footer = () => {
    const { t } = useTranslation('ui', { keyPrefix: 'footer' })

    return (
        <Box sx={styles.footerSx}>
            <Container maxWidth={containerMaxWidth}>{t('text')}</Container>
        </Box>
    )
}
