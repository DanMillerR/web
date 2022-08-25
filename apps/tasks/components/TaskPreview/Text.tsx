import { Typography, TypographyProps } from '@mui/material'
import { taskPreview } from 'cnfg/tasks'

export const TaskPreviewText = ({
  text,
  color,
}: {
  text: string
  color: TypographyProps['color']
}) =>
  text ? (
    <Typography
      sx={{ flexGrow: 1 }}
      variant={taskPreview.textVariant}
      color={color}
    >
      {text}
    </Typography>
  ) : null
