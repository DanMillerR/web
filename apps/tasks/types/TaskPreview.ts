import { Task } from '.'

export type TaskPreviewProps = Omit<Task, 'id' | 'state'> &
  Record<'deadlined' | 'fail' | 'skipped' | 'done', boolean>
