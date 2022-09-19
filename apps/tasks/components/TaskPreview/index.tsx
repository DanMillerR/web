import { CardActionArea, CardContent } from '@mui/material'
import { Card } from '@mui/material'
import { Flex } from 'ui'
import { TaskPreviewImg } from './Img'
import { TaskPreviewProgress } from './Progress'
import { TaskPreviewText } from './Text'
import { TaskPreviewTitle } from './Title'
import { TaskPreviewButtons } from './Buttons'
import { useBg, useColor } from 'tasks'
import { useTaskDetailsPathname } from 'cnfg/paths'
import Link from 'next/link'

export const TaskPreview = () => {
  const bg = useBg()
  const color = useColor()

  const cardSx = {
    mb: 2,
    ...(bg && { backgroundColor: bg }),
  }

  return (
    <Card sx={cardSx}>
      <Flex>
        <TaskPreviewImg />
        <Link href={useTaskDetailsPathname()}>
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
        </Link>
      </Flex>
      <TaskPreviewProgress />
    </Card>
  )
}
