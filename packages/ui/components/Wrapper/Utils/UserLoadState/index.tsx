import { UserLoadStateInner } from './UserLoadStateInner'
import { UserLoadStateWrapper } from './UserLoadStateWrapper'

export const UserLoadState = () => (
  <UserLoadStateWrapper>
    <UserLoadStateInner />
  </UserLoadStateWrapper>
)
