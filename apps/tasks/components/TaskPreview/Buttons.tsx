import { buttons } from 'cnfg/tasks/taskPreview'
import { useTranslation } from 'next-i18next'
import { Flex } from 'ui'
import { TaskPreviewButton } from './Button'
import { TASK_NORMAL_STATE } from 'cnfg/tasks'
import { useTask } from 'ctx'
import { TASK_PREVIEW } from 'cnfg/namespaces'
import { TASK_PREVIEW_BUTTONS } from 'cnfg/keyPreffixes'

export const TaskPreviewButtons = () => {
  const { t } = useTranslation(TASK_PREVIEW, {
    keyPrefix: TASK_PREVIEW_BUTTONS,
  })

  return (
    <Flex
      sx={{
        color: useTask().state == TASK_NORMAL_STATE ? 'inherit' : '#fff',
      }}
    >
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
