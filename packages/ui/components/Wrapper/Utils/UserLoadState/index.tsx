import { useManageAccToken, useUserLoad } from 'acc'
import { PropsWithChildren } from 'react'
import {
  UserLoadError,
  UserLoadLoading,
  UserLoadVerification,
} from './innerReturns'

export const UserLoadState = ({ children }: PropsWithChildren<EmptyObj>) => {
  const state = useUserLoad()
  useManageAccToken()

  switch (state) {
    case 'LOADING':
      return <UserLoadLoading />
    case 'ERROR':
      return <UserLoadError />
    case 'INFO':
      return <>INFO</>
    case 'VERIFICATION':
      return <UserLoadVerification />
    default:
      return <>{children}</>
  }
}
