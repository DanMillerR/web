import { TextField } from '@mui/material'
import { useTaskData } from 'ctx'

export const TaskDetailsProgress = () => {
  const [, control] = useTaskData()

  return <TextField label="(T) PROGRESS" {...control('progress')} />
}
