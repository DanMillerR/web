import { IconButton, IconButtonProps } from '@mui/material'
import Link from 'next/link'
import { ComponentType, Fragment } from 'react'
import { useTaskDetailsPathname } from 'cnfg/paths'

export const TaskPreviewButton = ({
  symbol: Symbol,
  label,
  color,
  useOnClick,
  link,
}: {
  symbol: ComponentType
  label: string
  color: IconButtonProps['color']
  useOnClick?: () => () => void
  link?: true
}) => {
  const Wrapper = link ? Link : Fragment

  return (
    <Wrapper href={useTaskDetailsPathname()}>
      <IconButton
        title={label}
        {...(useOnClick ? { useOnClick: useOnClick() } : null)}
        color={color}
      >
        <Symbol />
      </IconButton>
    </Wrapper>
  )
}
