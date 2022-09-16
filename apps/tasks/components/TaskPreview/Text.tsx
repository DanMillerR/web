import { Typography, TypographyProps } from '@mui/material'
import { taskPreview } from 'cnfg/tasks'
import { useTask } from 'ctx'

export const TaskPreviewText = ({
  color,
}: {
  color: TypographyProps['color']
}) => {
  const { text } = useTask()

  return text ? (
    <Typography
      sx={{ flexGrow: 1 }}
      variant={taskPreview.textVariant}
      color={color}
    >
      {text}
    </Typography>
  ) : null
}
