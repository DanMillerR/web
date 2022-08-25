import { CardMedia } from '@mui/material'

export const TaskPreviewImg = ({ img }: { img: string }) =>
  img ? (
    <CardMedia
      component="img"
      sx={{ minWidth: '40%', maxWidth: '40%' }}
      image={img}
    />
  ) : null
