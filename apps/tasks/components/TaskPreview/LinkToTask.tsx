import { useTaskDetailsPathname } from 'cnfg/paths'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export const LinkToTask = ({ children }: PropsWithChildren<EmptyObj>) => {
  return <Link href={useTaskDetailsPathname()}>{children}</Link>
}
