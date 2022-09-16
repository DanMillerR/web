import { CardActionArea, CardMedia } from '@mui/material'
import { useTask } from 'ctx'

export const TaskPreviewImg = () => {
  const { img } = useTask()

  return img ? (
    <CardActionArea
      sx={{
        minWidth: '40%',
        maxWidth: '40%',
      }}
    >
      <CardMedia component="img" image={img} />
    </CardActionArea>
  ) : null
}
