import { buttons } from 'cnfg/tasks/taskPreview'
import { useTranslation } from 'next-i18next'
import { Flex } from 'ui'
import { TaskPreviewButton } from './Button'

export const TaskPreviewButtons = () => {
  const { t } = useTranslation('task-previews', { keyPrefix: 'buttons' })

  return (
    <Flex>
      {buttons.map((props) => (
        <TaskPreviewButton
          key={props.labelKey}
          {...{
            ...props,
            label: t(props.labelKey),
          }}
        />
      ))}
    </Flex>
  )
}
