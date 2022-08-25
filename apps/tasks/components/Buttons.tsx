import { Card } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { Flex } from 'ui'
import { TaskPreviewButton } from './TaskPreview/Button'
import { Close, Done, Settings } from '@mui/icons-material'

export const TaskPreviewButtons = () => {
  const { t } = useTranslation('task-previews', { keyPrefix: 'buttons' })

  return (
    <Card
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <Flex sx={{ height: '100%' }}>
        {[
          {
            symbol: Done,
            label: t('done'),
            color: 'success',
          },
          {
            symbol: Close,
            label: t('fail'),
            color: 'error',
          },
          {
            symbol: Close,
            label: t('skip'),
            color: 'warning',
          },
          {
            symbol: Settings,
            label: t('settings'),
            color: 'info',
          },
        ].map((props) => (
          <TaskPreviewButton {...props} />
        ))}
      </Flex>
    </Card>
  )
}
