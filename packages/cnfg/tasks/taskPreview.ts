import { Variant } from '@mui/material/styles/createTypography'
import { SvgIconComponent, Close, Done, Settings } from '@mui/icons-material'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from 'fb'
import { useUser } from 'acc'
import { useTask } from 'ctx'
import {
  TASK_DONE_STATE,
  TASK_FAILED_STATE,
  TASK_SKIPPED_STATE,
  TASK_NORMAL_STATE,
} from './state'
import { useRouter } from 'next/router'
import { useTaskDetailsPathname } from '../paths'
import { IconButtonProps } from '@mui/material'

type Buttons = {
  symbol: SvgIconComponent
  labelKey: string
  color: IconButtonProps['color']
  useOnClick: () => () => void
}[]

export const textVariant: Variant = 'body1'
export const buttons: Buttons = [
  {
    symbol: Done,
    labelKey: 'done',
    color: 'success',
    useOnClick: () => {
      const [{ uid }] = useUser()
      const { id, state } = useTask()

      return () =>
        updateDoc(
          doc(db, 'users/' + uid),
          'tasks.' + id + '.state',
          state == TASK_DONE_STATE ? TASK_NORMAL_STATE : TASK_DONE_STATE
        )
    },
  },
  {
    symbol: Close,
    labelKey: 'fail',
    color: 'error',
    useOnClick: () => {
      const [{ uid }] = useUser()
      const { id, state } = useTask()

      return () =>
        updateDoc(
          doc(db, 'users/' + uid),
          'tasks.' + id + '.state',
          state == TASK_FAILED_STATE ? TASK_NORMAL_STATE : TASK_FAILED_STATE
        )
    },
  },
  {
    symbol: Close,
    labelKey: 'skip',
    color: 'warning',
    useOnClick: () => {
      const [{ uid }] = useUser()
      const { id, state } = useTask()

      return () =>
        updateDoc(
          doc(db, 'users/' + uid),
          'tasks.' + id + '.state',
          state == TASK_SKIPPED_STATE ? TASK_NORMAL_STATE : TASK_SKIPPED_STATE
        )
    },
  },
  {
    symbol: Settings,
    labelKey: 'settings',
    color: 'info',
    // todo?: make it "a" tag
    useOnClick: () => {
      const { replace } = useRouter()
      const pathname = useTaskDetailsPathname()

      return () => replace(pathname)
    },
  },
]
