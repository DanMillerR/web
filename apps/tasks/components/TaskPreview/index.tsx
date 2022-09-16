import { CardActionArea, CardContent } from '@mui/material'
import { Card } from '@mui/material'
import { Flex } from 'ui'
import { TaskPreviewImg } from './Img'
import { TaskPreviewProgress } from './Progress'
import { TaskPreviewText } from './Text'
import { TaskPreviewTitle } from './Title'
import { deadlined, done, fail, skipped, taskPreview } from 'cnfg/tasks'
import { TaskPreviewButtons } from './Buttons'
import { useTask } from 'ctx'

const useBg = () => {
  const { state } = useTask()

  if (state == deadlined) return '#000'
  if (state == skipped) return 'warning.dark'
  if (state == fail) return 'error.dark'
  if (state == done) return 'success.light'
}

const useColor = () => {
  const { state } = useTask()

  if (state == deadlined) return '#fff'
  if (state == skipped) return 'warning.contrastText'
  if (state == fail) return 'error.contrastText'
  if (state == done) return 'success.contrastText'
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
    display: 'flex',
    // height,
    mb: 2,
    ...(bg && { backgroundColor: bg }),
  }

  return (
    <Card sx={cardSx}>
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
            <TaskPreviewProgress />
          </CardActionArea>
          <TaskPreviewButtons />
        </Flex>
      </CardContent>
    </Card>
  )
}
