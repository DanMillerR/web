import { IconButton, IconButtonProps } from '@mui/material'
import { ComponentType, Fragment } from 'react'
import { TASK_NORMAL_STATE } from 'cnfg/tasks'
import { useTask } from 'ctx'
import { LinkToTask } from './LinkToTask'
import { IfHook } from 'utils'

type UseOnClick = () => () => void

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
  useOnClick?: UseOnClick
  link?: true
}) => {
  const Wrapper = link ? LinkToTask : Fragment

  return (
    <IfHook<'onClick', UseOnClick>
      prop="onClick"
      cond={!!useOnClick}
      hook={useOnClick as UseOnClick}
      Comp={({ onClick }) => {
        const iconColor =
          useTask().state == TASK_NORMAL_STATE ? color : 'inherit'

        return (
          <Wrapper>
            <IconButton title={label} onClick={onClick} color={iconColor}>
              <Symbol />
            </IconButton>
          </Wrapper>
        )
      }}
    />
  )
}
