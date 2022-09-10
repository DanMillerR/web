import { useRouter } from 'next/router'
import { url } from 'cnfg/acc'

export const useRequireUser = () => {
  const { pathname, replace } = useRouter()
  const replaceUrl = new URL(url)
  replaceUrl.searchParams.set('return-url', pathname)

  return () => replace(replaceUrl)
}
