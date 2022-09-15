import { Task } from 'types'

export type TaskPreviewProps = Omit<Task, 'id' | 'state'> &
  Record<'deadlined' | 'fail' | 'skipped' | 'done', boolean>
