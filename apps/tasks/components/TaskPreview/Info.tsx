import { CardContent } from '@mui/material'
import { Card } from '@mui/material'
import { Flex } from 'ui'
import { TaskPreviewProps } from '../../types/TaskPreview'
import { TaskPreviewImg } from './Img'
import { TaskPreviewProgress } from './Progress'
import { TaskPreviewText } from './Text'
import { TaskPreviewTitle } from './Title'

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

export const TaskPreviewInfo = ({
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

  const cardSx = {
    display: 'flex',
    mb: 2,
    ...(bg && { backgroundColor: bg }),
  }

  return (
    <Card sx={cardSx}>
      <TaskPreviewImg img={img} />
      <CardContent>
        <Flex
          sx={{
            height: '100%',
          }}
          clmn
        >
          <TaskPreviewTitle {...{ title, color }} />
          <TaskPreviewText {...{ text, color }} />
          <TaskPreviewProgress progress={progress} />
        </Flex>
      </CardContent>
    </Card>
  )
}
