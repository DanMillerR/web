import { TextField } from '@mui/material'
import { useTask } from 'ctx'

export const TaskDetailsTitle = () => {
  const { title } = useTask()

  return <TextField label="(T) TITLE" value={title} />
}
