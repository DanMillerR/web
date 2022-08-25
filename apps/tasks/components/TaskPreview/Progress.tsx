import { LinearProgress } from '@mui/material'

export const TaskPreviewProgress = ({ progress }: { progress: number }) =>
  progress ? <LinearProgress variant="determinate" value={progress} /> : null
