import { TaskDataProvider } from 'ctx'
import { useEffect, useState } from 'react'
import { onSnapshot } from 'firebase/firestore'
import { USER_REF } from 'fb'
import { useUser } from 'acc'
import { UserData } from 'acc/types'
import { Task } from 'types'
import {
  TaskDetailsProgress,
  TaskDetailsSubTitle,
  TaskDetailsText,
  TaskDetailsTitle,
} from '../components/TaskDetails'
import { Flex, LoadingScreen } from 'ui'
import { TaskDataImg } from '../components/TaskDetails/Img'
import { Save } from '../components/Save'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LOADINGS, TASKS_DETAILS, UI, USER_LOAD_STATE } from 'cnfg/namespaces'
import { CircularProgress } from '@mui/material'
import { GetStaticProps } from 'next'

const TaskDetails = () => {
  const [{ uid }] = useUser()
  const [task, setTask] = useState<Task>()

  useEffect(() => {
    if (uid) {
      onSnapshot(USER_REF(uid), (snap) => {
        const { tasks } = snap.data() as UserData

        setTask(tasks[new URL(location.href).searchParams.get('id') as string])
      })
    }
  }, [uid])

  return task ? (
    <TaskDataProvider {...{ task }}>
      <Save originalTask={task} />
      <Flex clmn>
        <TaskDataImg />
        <TaskDetailsTitle />
        <TaskDetailsSubTitle />
        <TaskDetailsProgress />
        <TaskDetailsText />
      </Flex>
    </TaskDataProvider>
  ) : (
    <LoadingScreen icon={<CircularProgress size="0.8em" />} tKey="loading" />
  )
}

export default TaskDetails
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    return {
      props: await serverSideTranslations(locale || 'en', [
        USER_LOAD_STATE,
        LOADINGS,
        TASKS_DETAILS,
        UI,
      ]),
    }
  } catch (error) {
    console.log(error)
    return { props: {} }
  }
}
