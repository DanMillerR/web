import { useUser } from 'acc'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { TaskPreview } from '../components/TaskPreview'
import { Task } from 'types'

const deadlined = 0
const normal = 1
const skipped = 2
const fail = 3
const done = 4

const Index = () => {
  //@ts-ignore
  const [, { tasks }] = useUser({
    data: {
      tasks: {},
    },
  })

  return (
    <>
      {Object.values(tasks as Record<string, Task>)
        .sort((a, b) => a.state - b.state)
        .map(({ state, ...p }) => (
          <TaskPreview
            {...p}
            key={p.id}
            deadlined={state === deadlined}
            skipped={state == skipped}
            done={state == done}
            fail={state == fail}
          />
        ))}
    </>
  )
}

export default Index
export const getStaticProps = async () => ({
  props: await serverSideTranslations('en'),
})
