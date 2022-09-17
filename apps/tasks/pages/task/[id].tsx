import { TaskDataProvider } from 'ctx'
import { useEffect, useState } from 'react'
import { onSnapshot } from 'firebase/firestore'
import { USER_REF } from 'fb'
import { useUser } from 'acc'
import { UserData } from 'acc/types'
import { useRouter } from 'next/router'
import { Task } from 'types'
import {
  TaskDetailsProgress,
  TaskDetailsSubTitle,
  TaskDetailsText,
  TaskDetailsTitle,
} from '../../components/TaskDetails'

const TaskDetails = () => {
  const { query } = useRouter()
  const [{ uid }] = useUser()
  const [task, setTask] = useState<Task>()

  useEffect(() => {
    if (uid) {
      onSnapshot(USER_REF(uid), (snap) => {
        const { tasks } = snap.data() as UserData

        setTask(tasks[query.id as string])
      })
    }
  }, [uid])

  return task ? (
    <>
      <TaskDataProvider {...{ task }}>
        <TaskDetailsTitle />
        <TaskDetailsSubTitle />
        <TaskDetailsProgress />
        <TaskDetailsText />
      </TaskDataProvider>
    </>
  ) : (
    '(T) LOADING'
  )
}

export default TaskDetails
