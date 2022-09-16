import { useTask } from 'ctx'

export const useTaskDetailsPathname = () => {
  const { id } = useTask()

  return '/task/' + id
}
