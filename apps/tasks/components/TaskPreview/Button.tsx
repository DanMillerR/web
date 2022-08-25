import { IconButton, TypographyProps } from '@mui/material'
import { ComponentType } from 'react'

export const TaskPreviewButton = ({
  symbol: Symbol,
  label,
  color,
}: {
  symbol: ComponentType
  label: string
  color: TypographyProps['color']
}) => (
  <IconButton
    sx={{
      backgroundColor: color + '.main',
      color: color + '.contrastText',
      borderRadius: 0,
      flexGrow: 1,
    }}
  >
    <Symbol />
  </IconButton>
)
