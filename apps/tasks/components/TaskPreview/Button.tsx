import {
  IconButton,
  // , TypographyProps
} from '@mui/material'
import { ComponentType } from 'react'

export const TaskPreviewButton = ({
  symbol: Symbol,
  label,
  color,
}: {
  symbol: ComponentType
  label: string
  color: string // todo: TypographyProps['color']
}) => (
  <IconButton
    title={label}
    sx={{
      backgroundColor: color + '.main',
      color: color + '.contrastText',
      // borderRadius: 0,
      border: color + '.contrastText' + ' solid 2px',
      margin: '0.2em',
    }}
  >
    <Symbol />
  </IconButton>
)
