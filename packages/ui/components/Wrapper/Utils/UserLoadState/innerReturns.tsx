import { Info, Warning } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import { LoadingScreen } from '../../../LoadingScreen'

export const UserLoadLoading = () => (
  <LoadingScreen
    header
    icon={<CircularProgress size="0.8em" />}
    tKey="loading"
  />
)

export const UserLoadError = () => (
  <LoadingScreen
    header
    icon={<Warning color="error" fontSize="inherit" />}
    tKey="error"
  />
)

export const UserLoadVerification = () => (
  <LoadingScreen
    header
    icon={<Info color="info" fontSize="inherit" />}
    tKey="verification"
  />
)
