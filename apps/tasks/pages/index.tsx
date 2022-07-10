import { useUser } from 'acc'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Task } from '../types'
import {
  LinearProgress,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Flex } from 'ui'

const deadlined = 0
const normal = 1
const skipped = 2
const fail = 3
const done = 4

const getBg = (deadlined, skipped, fail, done) => {
  if (deadlined) return '#000'
  if (skipped) return 'warning.dark'
  if (fail) return 'error.dark'
  if (done) return 'success.light'
}

const getColor = (deadlined, skipped, fail, done) => {
  if (deadlined) return '#fff'
  if (skipped) return 'warning.contrastText'
  if (fail) return 'error.contrastText'
  if (done) return 'success.contrastText'
}

const TaskPreview = ({
  title,
  progress,
  skipped,
  fail,
  done,
  img,
  text,
  id,
}) => {
  const bg = getBg(deadlined, skipped, fail, done)
  const color = getColor(deadlined, skipped, fail, done)

  return (
    <Card
      sx={{
        display: 'flex',
        mb: 2,
        ...(bg && { backgroundColor: bg }),
      }}
      key={id}
    >
      {img && <CardMedia component="img" sx={{ width: 151 }} image={img} />}
      <CardContent>
        <Flex clmn>
          <Typography variant="h4" color={color}>
            {title}
          </Typography>
          <Typography variant="body1" color={color}>
            {text}
          </Typography>
          {progress && (
            <LinearProgress variant="determinate" value={progress} />
          )}
        </Flex>
      </CardContent>
    </Card>
  )
}

const Index = () => {
  //@ts-ignore
  const [, { tasks }] = useUser()

  return (
    <>
      {Object.values(tasks as Record<string, Task>)
        .sort((a, b) => a.state - b.state)
        .map(({ state, ...p }) => (
          <TaskPreview
            {...p}
            skipped={state == skipped}
            done={state == done}
            fail={state == fail}
          />
        ))}
    </>
  )
}

export default Index
export const getStaticProps = async () => ({
  props: await serverSideTranslations('en'),
})
