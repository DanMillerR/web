import { useUser } from 'acc'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { TaskPreview } from '../components/TaskPreview'
import { Task } from 'types'
import { Add } from '../components/Add'
import { TaskProvider } from 'ctx'
import { LOADINGS, TASK_PREVIEW, UI } from 'cnfg/namespaces'

const Index = () => {
  const [, { tasks }] = useUser({
    data: {
      tasks: {},
    },
  })

  return (
    <>
      <Add />
      {Object.values(tasks as Record<string, Task>)
        .sort((a, b) => a.state - b.state)
        .map((taskProps) => (
          <TaskProvider value={taskProps} key={taskProps.id}>
            <TaskPreview />
          </TaskProvider>
        ))}
    </>
  )
}

export default Index
export const getStaticProps = async () => ({
  props: await serverSideTranslations('en', [LOADINGS, TASK_PREVIEW, UI]),
})
