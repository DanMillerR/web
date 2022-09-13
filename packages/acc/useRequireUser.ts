import { useRouter } from 'next/router'
import { url } from 'cnfg/acc'

export const useRequireUser = () => {
  const { replace } = useRouter()

  return () => {
    const replaceUrl = new URL(url)
    replaceUrl.searchParams.set('return-url', location.href)

    replace(replaceUrl)
  }
}
