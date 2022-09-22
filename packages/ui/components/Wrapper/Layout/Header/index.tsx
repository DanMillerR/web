import { UserMenu } from './UserMenu'
import { Header as BaseHeader } from '../../../Header'
import { useUser } from 'acc'

export const Header = () => {
  const [, data] = useUser()

  return <BaseHeader>{data ? <UserMenu /> : null} </BaseHeader>
}
