import { useUserLoad } from 'acc'
import { PropsWithChildren } from 'react'

export const UserLoad = ({
  children,
}: PropsWithChildren<{ [K in never]: never }>) => {
  const code = useUserLoad()

  switch (code) {
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
