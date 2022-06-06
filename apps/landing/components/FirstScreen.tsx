import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import{BlockCover}from'ui'

export const FirstScreen = () => {
    const { t } = useTranslation('landing')

    return (
        <BlockCover sx={{
                p: 1,
                backgroundSize: 'cover',
                backgroundImage: "url('/pictures/paris.jpg')",
            }}>
            <Typography color="#fff" variant="h1">
                {t('mainTitle')}
            </Typography>
        </BlockCover>
    )
}
