import { CardActionArea, CardMedia } from '@mui/material'

export const TaskPreviewImg = ({ img }: { img: string }) =>
  img ? (
    <CardActionArea
      sx={{
        minWidth: '40%',
        maxWidth: '40%',
      }}
    >
      <CardMedia component="img" image={img} />
    </CardActionArea>
  ) : null
