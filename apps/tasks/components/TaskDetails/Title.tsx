import { TextField } from '@mui/material'
import { useTaskData } from 'ctx'

export const TaskDetailsTitle = () => {
  const [, , control] = useTaskData()

  return <TextField multiline label="(T) TITLE" {...control('title')} />
}
