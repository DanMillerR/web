import { Fab, useTheme } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from 'fb'
import { useUser } from 'acc'
import { v4 as uuid } from 'uuid'
import { useLoadings } from 'loadings'
import { Task } from 'types'
import { TASK_NORMAL_STATE } from 'cnfg/tasks'

export const Add = () => {
  const { error } = useLoadings()
  const [{ uid }, { tasks }] = useUser()
  const theme = useTheme()

  const handleAdd = () => {
    const id = uuid()

    const defaultTask: PartialRecursively<Task> = {
      id,
      state: TASK_NORMAL_STATE,
      timestamps: {
        create: new Date().toISOString(),
        update: new Date().toISOString(),
      },
    }

    updateDoc(
      doc(db, 'users/' + uid),
      'tasks',
      Object.assign({ [id]: defaultTask }, tasks)
    ).catch(error)
  }

  return (
    <Fab
      sx={{
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
      }}
      onClick={handleAdd}
    >
      <AddIcon />
    </Fab>
  )
}
