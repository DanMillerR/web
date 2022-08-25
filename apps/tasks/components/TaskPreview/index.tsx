import { TaskPreviewProps } from '../../types/TaskPreview'
import { TaskPreviewButtons } from '../Buttons'
import { TaskPreviewInfo } from './Info'

export const TaskPreview = (p: TaskPreviewProps) => (
  <div style={{ position: 'relative' }}>
    <TaskPreviewButtons />
    <TaskPreviewInfo {...p} />
  </div>
)
