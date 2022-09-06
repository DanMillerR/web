import { CardActionArea, CardContent } from '@mui/material'
import { Card } from '@mui/material'
import { Flex } from 'ui'
import { TaskPreviewProps } from '../../types/TaskPreview'
import { TaskPreviewImg } from './Img'
import { TaskPreviewProgress } from './Progress'
import { TaskPreviewText } from './Text'
import { TaskPreviewTitle } from './Title'
import { taskPreview } from 'cnfg/tasks'
import { TaskPreviewButtons } from './Buttons'

const getBg = (
  deadlined: boolean,
  skipped: boolean,
  fail: boolean,
  done: boolean
) => {
  if (deadlined) return '#000'
  if (skipped) return 'warning.dark'
  if (fail) return 'error.dark'
  if (done) return 'success.light'
}

const getColor = (
  deadlined: boolean,
  skipped: boolean,
  fail: boolean,
  done: boolean
) => {
  if (deadlined) return '#fff'
  if (skipped) return 'warning.contrastText'
  if (fail) return 'error.contrastText'
  if (done) return 'success.contrastText'
}

const mult = (x = '', p = 0, m = 1) => {
  const n = parseFloat(x)
  const s = x.slice(n.toString().length)
  return (n + p) * m + s
}

export const TaskPreview = ({
  title,
  progress,
  skipped,
  deadlined,
  fail,
  done,
  img,
  text,
}: TaskPreviewProps) => {
  const bg = getBg(deadlined, skipped, fail, done)
  const color = getColor(deadlined, skipped, fail, done)
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
      <TaskPreviewImg img={img} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Flex
          sx={{
            height: '100%',
          }}
          clmn
        >
          <CardActionArea sx={{ flexGrow: 1 }}>
            <TaskPreviewTitle {...{ title, color }} />
            <TaskPreviewText {...{ text, color }} />
            <TaskPreviewProgress progress={progress} />
          </CardActionArea>
          <TaskPreviewButtons />
        </Flex>
      </CardContent>
    </Card>
  )
}
