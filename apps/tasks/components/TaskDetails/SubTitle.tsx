import { TextField } from '@mui/material'
import { useTaskData } from 'ctx'

export const TaskDetailsSubTitle = () => {
  const [, control] = useTaskData()

  return <TextField label="(T) SUBTITLE" {...control('subTitle')} />
}
