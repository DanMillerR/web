import { CircularProgress, TextField } from '@mui/material'
import { TASKS_DETAILS_INPUT_LABELS } from 'cnfg/keyPreffixes'
import { TASKS_DETAILS } from 'cnfg/namespaces'
import { useTaskData } from 'ctx'
import { useTranslation } from 'next-i18next'
import { Flex } from 'ui'

export const TaskDetailsProgress = () => {
  const { t } = useTranslation(TASKS_DETAILS, {
    keyPrefix: TASKS_DETAILS_INPUT_LABELS,
  })
  const [{ progress }, , control] = useTaskData()

  return (
    <Flex>
      <CircularProgress variant="determinate" value={progress} />
      <TextField label={t('progress')} {...control('progress')} />
    </Flex>
  )
}
