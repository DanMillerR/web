import { TextField } from '@mui/material'
import { useTaskData } from 'ctx'

export const TaskDetailsText = () => {
  const [, control] = useTaskData()

  return <TextField label="(T) TEXT" {...control('text')} />
}
