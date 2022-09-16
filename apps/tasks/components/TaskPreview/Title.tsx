import { Typography, TypographyProps } from '@mui/material'
import { useTask } from 'ctx'

export const TaskPreviewTitle = ({
  color,
}: {
  color: TypographyProps['color']
}) => {
  const { title } = useTask()

  return title ? (
    <Typography variant="h4" color={color}>
      {title}
    </Typography>
  ) : null
}
