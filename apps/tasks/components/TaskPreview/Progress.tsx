import { LinearProgress } from '@mui/material'
import { useTask } from 'ctx'

export const TaskPreviewProgress = () => {
  const { progress } = useTask()

  return progress ? (
    <LinearProgress variant="determinate" value={progress} />
  ) : null
}
