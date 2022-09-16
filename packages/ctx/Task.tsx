import { genContext, valueArg } from 'gen-context'
import { PropsWithChildren } from 'react'
import { Task } from 'types'

export const [useTask, TaskProvider] = genContext<
  Task,
  PropsWithChildren<{
    value: Task
  }>
>({
  provider: valueArg<Task>(),
})
