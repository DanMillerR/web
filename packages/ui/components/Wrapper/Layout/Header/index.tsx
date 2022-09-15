import { Typography } from '@mui/material'
import { styles } from 'cnfg'
import { useTranslation } from 'next-i18next'
import { Flex, BlockCover } from '../../..'
import { UserMenu } from './UserMenu'

export const Header = () => {
  const { t } = useTranslation('ui', { keyPrefix: 'header' })

  return (
    <BlockCover sx={styles.headerSx}>
      <Flex aic sx={{ p: 1 }}>
        <Typography sx={{ mr: 'auto' }}>{t('title')}</Typography>
        <UserMenu />
      </Flex>
    </BlockCover>
  )
}
