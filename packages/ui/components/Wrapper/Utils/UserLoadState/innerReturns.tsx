import { Info, Warning } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import { UserLoadStateLayout } from './UserLoadStateLayout'

export const UserLoadLoading = () => (
  <UserLoadStateLayout
    icon={<CircularProgress size="inherit" />}
    tKey="loading"
  />
)

export const UserLoadError = () => (
  <UserLoadStateLayout
    icon={<Warning color="error" fontSize="inherit" />}
    tKey="error"
  />
)

export const UserLoadVerification = () => (
  <UserLoadStateLayout
    icon={<Info color="info" fontSize="inherit" />}
    tKey="verification"
  />
)
