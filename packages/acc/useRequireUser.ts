import { useRouter } from 'next/router'
import { url } from 'cnfg/acc'

export const useRequireUser = () => {
  const { replace } = useRouter()

  return () => replace(url)
}
