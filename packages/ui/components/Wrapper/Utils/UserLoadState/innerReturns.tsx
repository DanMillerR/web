import { Info, Warning } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import { LoadingScreen } from '../../../LoadingScreen'

export const UserLoadLoading = () => (
  <LoadingScreen icon={<CircularProgress size="inherit" />} tKey="loading" />
)

export const UserLoadError = () => (
  <LoadingScreen
    icon={<Warning color="error" fontSize="inherit" />}
    tKey="error"
  />
)

export const UserLoadVerification = () => (
  <LoadingScreen
    icon={<Info color="info" fontSize="inherit" />}
    tKey="verification"
  />
)
