import { IconButton, IconButtonProps } from '@mui/material'
import { ComponentType } from 'react'

export const TaskPreviewButton = ({
  symbol: Symbol,
  label,
  color,
  useOnClick,
}: {
  symbol: ComponentType
  label: string
  color: IconButtonProps['color'] // todo: TypographyProps['color']
  useOnClick: () => () => void
}) => (
  <IconButton title={label} onClick={useOnClick()} color={color}>
    <Symbol />
  </IconButton>
)
