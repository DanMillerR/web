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
import { Flex } from 'ui'
import { TaskDataImg } from '../../components/TaskDetails/Img'
import { Save } from '../../components/Save'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { TASKS_DETAILS } from 'cnfg/namespaces'

const TaskDetails = () => {
  const { t } = useTranslation(TASKS_DETAILS)
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
    t('loading')
  )
}

export default TaskDetails
export const getStaticProps = async () => ({
  props: await serverSideTranslations('en'),
})
export const getStaticPaths = () => ({
  paths: [],
  fallback: true,
})
