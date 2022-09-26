import { useTask } from 'ctx'
import { TASK_URL } from './urls'
import { useRouter } from 'next/router'

export const useTaskDetailsPathname = () => {
  const { id } = useTask()

  return useRouter().pathname.startsWith(TASK_URL) ? id : TASK_URL + '?id=' + id
}
