import { styles } from 'cnfg'
import { useTranslation } from 'next-i18next'
import { BlockCover } from '..'
import { Typography } from '@mui/material'

export const Footer = () => {
    const { t } = useTranslation('ui', { keyPrefix: 'footer' })

    return (
        <BlockCover sx={styles.footerSx}>
            <Typography textAlign="center">{t('text')}</Typography>
        </BlockCover>
    )
}
