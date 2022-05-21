import { styles } from 'cnfg'
import { useTranslation } from 'next-i18next'
import { BlockCover } from '..'

export const Footer = () => {
    const { t } = useTranslation('ui', { keyPrefix: 'footer' })

    return <BlockCover sx={styles.footerSx}>{t('text')}</BlockCover>
}
