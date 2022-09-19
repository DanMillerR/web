import { UseDataReturn, useData } from 'form'
import { genContext } from 'gen-context'
import { Task } from 'types'
import { PropsWithChildren } from 'react'

export const [useTaskData, TaskDataProvider] = genContext<
  UseDataReturn<Task>,
  PropsWithChildren<{
    task: Task
  }>
>({
  Provider: ({ task, children, RealProvider }) => {
    const data = useData(task)

    return <RealProvider value={data}>{children}</RealProvider>
  },
})
