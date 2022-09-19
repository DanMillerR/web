import { useTaskData } from 'ctx'

export const TaskDataImg = () => {
  const [{ img }] = useTaskData()

  return img ? <img src={img} /> : null
}
