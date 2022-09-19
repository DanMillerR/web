import { useTaskData } from 'ctx'
import Image from 'next/image'

export const TaskDataImg = () => {
  const [{ img }] = useTaskData()

  return img ? <Image alt="" src={img} /> : null
}
