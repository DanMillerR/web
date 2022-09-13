import { Wrapper } from 'ui'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => (
  <Wrapper
    localConfig={{
      user: {
        signInRequired: false,
      },
      CONTAINER_MAX_WIDTH: 'xs',
    }}
  >
    <Component {...pageProps} />
  </Wrapper>
)

export default appWithTranslation(App)
