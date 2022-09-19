import { CircularProgress, TextField } from '@mui/material'
import { useTaskData } from 'ctx'
import { Flex } from 'ui'

export const TaskDetailsProgress = () => {
  const [{ progress }, , control] = useTaskData()

  return (
    <Flex>
      <CircularProgress variant="determinate" value={+progress} />
      <TextField label="(T) PROGRESS" {...control('progress')} />
    </Flex>
  )
}
