import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

export const FirstScreen = () => {
    const { t } = useTranslation('landing')

    return (
        <Box
            sx={{
                p: 1,
                backgroundSize: 'cover',
                backgroundImage: "url('/pictures/paris.jpg')",
            }}
        >
            <Typography color="#fff" variant="h1">
                {t('mainTitle')}
            </Typography>
        </Box>
    )
}
