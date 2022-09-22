import { WithEmail } from './components/WithEmail'

export const signInVariants = [
  {
    labelKey: 'with-email.label',
    index: 0,
    Component: WithEmail,
  },
]

export const url =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:3000/?message=acc-required'
    : 'https://accounts-tan.vercel.app/?message=acc-required'
