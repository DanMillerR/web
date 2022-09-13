import { Wrapper } from 'ui'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => (
  <Wrapper>
    <Component {...pageProps} />
  </Wrapper>
)

export default appWithTranslation(App)
