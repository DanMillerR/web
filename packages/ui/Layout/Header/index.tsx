import { Box, Container, Typography } from '@mui/material'
import { containerMaxWidth, styles } from 'cnfg'
import { useTranslation } from 'next-i18next'

export const Header = () => {
    const { t } = useTranslation('ui', { keyPrefix: 'header' })

    return (
        <Box sx={styles.headerSx}>
            <Container maxWidth={containerMaxWidth}>
                <Typography>{t('title')}</Typography>
            </Container>
        </Box>
    )
}
