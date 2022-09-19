import { IconButton, IconButtonProps } from '@mui/material'
import { ComponentType, Fragment } from 'react'
import { TASK_NORMAL_STATE } from 'cnfg/tasks'
import { useTask } from 'ctx'
import { LinkToTask } from './LinkToTask'
import { IfHook } from 'utils'

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
  const Wrapper = link ? LinkToTask : Fragment

  const iconColor = useTask().state == TASK_NORMAL_STATE ? color : 'inherit'

  return (
    <Wrapper>
      <IfHook
        prop="onClick"
        cond={!!useOnClick}
        hook={useOnClick as () => unknown}
        Comp={({ onClick }) => (
          <IconButton
            title={label}
            onClick={onClick as () => void}
            color={iconColor}
          />
        )}
      />
      <Symbol />
    </Wrapper>
  )
}
