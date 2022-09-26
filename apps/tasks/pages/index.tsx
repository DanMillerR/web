import { useUser } from 'acc'
import { TaskPreview } from '../components/TaskPreview'
import { Task } from 'types'
import { Add } from '../components/Add'
import { TaskProvider } from 'ctx'
import { LOADINGS, TASK_PREVIEW, UI, USER_LOAD_STATE } from 'cnfg/namespaces'
import { translation } from 'translation'

const Index = () => {
  const [, data] = useUser()

  return (
    <>
      <Add />
      {Object.values((data.tasks || {}) as Record<string, Task>)
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
export const getStaticProps = translation([
  USER_LOAD_STATE,
  LOADINGS,
  TASK_PREVIEW,
  UI,
])
