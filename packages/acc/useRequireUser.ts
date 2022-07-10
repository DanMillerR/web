import { useRouter } from 'next/router'

export const useRequireUser = () => {
  const { replace } = useRouter()

  return () => {
    replace('url')
  }
}
