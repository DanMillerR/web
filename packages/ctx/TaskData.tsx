import { UseDataReturn, useData } from 'form'
import { genContext } from 'gen-context'
import { Task } from 'types'
import { PropsWithChildren } from 'react'

export const [useTaskData, TaskDataProvider] = genContext<
  UseDataReturn<keyof Task>,
  PropsWithChildren<{
    task: Task
  }>
>({
  Provider: ({ task, RealProvider }) => {
    const data = useData(...(Object.keys(task) as (keyof Task)[]))

    return <RealProvider value={data}></RealProvider>
  },
})
