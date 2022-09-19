import { Fab } from '@mui/material'
import { Save as SaveIcon } from '@mui/icons-material'
import { useTaskData } from 'ctx'
import { updateDoc } from 'firebase/firestore'
import { USER_REF } from 'fb'
import { useUser } from 'acc'
import { TASKS_PROPERTY } from 'cnfg/paths'
import { useLoadings } from 'loadings'
import { useTheme } from '@mui/material'
import { Task } from 'types'

const compare = (obj1: AnyObj, obj2: AnyObj): boolean => {
  const v1 = Object.values(obj1)
  const v2 = Object.values(obj2)

  return v1
    .filter((x) => x)
    .every((v1, i) =>
      typeof v1 == 'object'
        ? compare(v1 as AnyObj, v2[i] as AnyObj)
        : v1 === v2[i]
    )
}

export const Save = ({ originalTask }: { originalTask: Task }) => {
  const { loading, success, error } = useLoadings()
  const [{ uid }] = useUser()
  const [data] = useTaskData()
  const theme = useTheme()

  const handleSave = () => {
    loading()

    updateDoc(USER_REF(uid), TASKS_PROPERTY + data.id, data)
      .then(() => success('(T) SAVED'))
      .catch(error)
  }

  return !compare(data, originalTask) ? (
    <Fab
      sx={{
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
      }}
      onClick={handleSave}
    >
      <SaveIcon />
    </Fab>
  ) : null
}
