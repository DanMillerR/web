import { Typography, TypographyProps } from '@mui/material'

export const TaskPreviewText = ({
  text,
  color,
}: {
  text: string
  color: TypographyProps['color']
}) =>
  text ? (
    <Typography sx={{ flexGrow: 1 }} variant="body1" color={color}>
      {text}
    </Typography>
  ) : null
