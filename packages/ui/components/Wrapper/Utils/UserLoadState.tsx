import { useManageAccToken, useUserLoad } from 'acc'
import { PropsWithChildren } from 'react'
import { EmptyObj } from 'types'

export const UserLoadState = ({ children }: PropsWithChildren<EmptyObj>) => {
  const state = useUserLoad()
  useManageAccToken()

  switch (state) {
    case 'LOADING':
      return <>LOADING</>
    case 'ERROR':
      return <>ERROR</>
    case 'INFO':
      return <>INFO</>
    case 'VER':
      return <>VER</>
    default:
      return <>{children}</>
  }
}
