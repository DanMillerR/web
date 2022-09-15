import { Fab, useTheme } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from 'fb'
import { useUser } from 'acc'
import { v4 as uuid } from 'uuid'

export const Add = () => {
  const [{ uid }, { tasks }] = useUser()
  const theme = useTheme()

  const handleAdd = () => {
    const id = uuid()

    updateDoc(doc(db, 'users/' + uid), {
      tasks: Object.assign({ [id]: { id } }, tasks),
    })
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
