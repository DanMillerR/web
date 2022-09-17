import { useRouter } from 'next/router'
import { url } from 'cnfg/acc'
import { useLoadings } from 'loadings'

export const useGoToAcc = () => {
  const { error } = useLoadings()
  const { replace } = useRouter()

  return () => {
    const replaceUrl = new URL(url)
    replaceUrl.searchParams.set('return-url', location.href)

    replace(replaceUrl).catch(error)
  }
}
