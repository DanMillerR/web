import { Typography } from '@mui/material'
import { styles } from 'cnfg'
import { useTranslation } from 'next-i18next'
import { BlockCover } from '../../..'

export const Header = () => {
    const { t } = useTranslation('ui', { keyPrefix: 'header' })

    return (
        <BlockCover sx={styles.headerSx}>
            <Typography>{t('title')}</Typography>
        </BlockCover>
    )
}
