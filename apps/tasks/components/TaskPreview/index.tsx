import { CardActionArea, CardContent } from '@mui/material'
import { Card } from '@mui/material'
import { Flex } from 'ui'
import { TaskPreviewImg } from './Img'
import { TaskPreviewProgress } from './Progress'
import { TaskPreviewText } from './Text'
import { TaskPreviewTitle } from './Title'
import {
  TASK_DEADLINED_STATE,
  TASK_DONE_STATE,
  TASK_FAILED_STATE,
  TASK_SKIPPED_STATE,
} from 'cnfg/tasks'
import { TaskPreviewButtons } from './Buttons'
import { useTask } from 'ctx'

const useBg = () => {
  const { state } = useTask()

  if (state == TASK_DEADLINED_STATE) return '#000'
  if (state == TASK_SKIPPED_STATE) return 'warning.dark'
  if (state == TASK_FAILED_STATE) return 'error.dark'
  if (state == TASK_DONE_STATE) return 'success.light'
}

const useColor = () => {
  const { state } = useTask()

  if (state == TASK_DEADLINED_STATE) return '#fff'
  if (state == TASK_SKIPPED_STATE) return 'warning.contrastText'
  if (state == TASK_FAILED_STATE) return 'error.contrastText'
  if (state == TASK_DONE_STATE) return 'success.contrastText'
}

// const mult = (x = '', p = 0, m = 1) => {
//   const n = parseFloat(x)
//   const s = x.slice(n.toString().length)
//   return (n + p) * m + s
// }

export const TaskPreview = () => {
  const bg = useBg()
  const color = useColor()
  // const theme = useTheme()
  // const { fontSize, lineHeight } = theme.typography[taskPreview.textVariant]

  // const height = mult(fontSize as string, lineHeight as number, 1)

  const cardSx = {
    // height,
    mb: 2,
    ...(bg && { backgroundColor: bg }),
  }

  return (
    <Card sx={cardSx}>
      <Flex>
        <TaskPreviewImg />
        <CardContent sx={{ flexGrow: 1 }}>
          <Flex
            sx={{
              height: '100%',
            }}
            clmn
          >
            <CardActionArea sx={{ flexGrow: 1 }}>
              <TaskPreviewTitle {...{ color }} />
              <TaskPreviewText {...{ color }} />
            </CardActionArea>
            <TaskPreviewButtons />
          </Flex>
        </CardContent>
      </Flex>
      <TaskPreviewProgress />
    </Card>
  )
}
