import { Typography, TypographyProps } from '@mui/material'

export const TaskPreviewTitle = ({
  title,
  color,
}: {
  title: string
  color: TypographyProps['color']
}) =>
  title ? (
    <Typography variant="h4" color={color}>
      {title}
    </Typography>
  ) : null
