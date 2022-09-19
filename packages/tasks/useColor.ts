import { useTask } from 'ctx'
import {
  TASK_DEADLINED_STATE,
  TASK_DONE_STATE,
  TASK_FAILED_STATE,
  TASK_SKIPPED_STATE,
} from 'cnfg/tasks'

export const useColor = () => {
  const { state } = useTask()

  if (state == TASK_DEADLINED_STATE) return '#fff'
  if (state == TASK_SKIPPED_STATE) return 'warning.contrastText'
  if (state == TASK_FAILED_STATE) return 'error.contrastText'
  if (state == TASK_DONE_STATE) return 'success.contrastText'
}
