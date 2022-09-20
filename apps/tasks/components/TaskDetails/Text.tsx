import { TextField } from '@mui/material'
import { useTaskData } from 'ctx'
import { useTranslation } from 'next-i18next'
import { TASKS_DETAILS_INPUT_LABELS } from 'cnfg/keyPreffixes'
import { TASKS_DETAILS } from 'cnfg/namespaces'

export const TaskDetailsText = () => {
  const { t } = useTranslation(TASKS_DETAILS, {
    keyPrefix: TASKS_DETAILS_INPUT_LABELS,
  })
  const [, , control] = useTaskData()

  return <TextField multiline label={t('text')} {...control('text')} />
}
